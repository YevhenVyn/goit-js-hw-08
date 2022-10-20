import _throttle from "lodash.throttle";
const formRef = document.querySelector('.feedback-form');
const refs = {
    email: formRef.querySelector('input[name = email]'),
    message: formRef.querySelector('textarea[name = message]'),
    button: formRef.querySelector('button'),
    firstLabel: formRef.querySelector('label'),
    labels: formRef.querySelectorAll('label'),
};

const labelsAr = refs.labels
const FEEDBACK = 'feedback-form-state';
let feedbackDataCurrentObj = {};


checkCurrentLocalStorage();

formRef.addEventListener('input', _throttle(getInputsValues, 500));
formRef.addEventListener('submit',handleSubmitForm);

function getInputsValues (event) {
    const currentInputName = event.target.name;
    const currentInputValue = event.target.value;

    feedbackDataCurrentObj[currentInputName] = currentInputValue;
    // console.log(feedbackDataCurrentObj);
    localStorage.setItem(FEEDBACK,JSON.stringify(feedbackDataCurrentObj))
}

function handleSubmitForm (event) {
    event.preventDefault();
    const feedbackComplete = localStorage.getItem(FEEDBACK);
    const feedbackCompleteObj = JSON.parse(feedbackComplete);

    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK);
    console.log(feedbackCompleteObj);
    feedbackDataCurrentObj = {};
}

function checkCurrentLocalStorage () {
    const feedbackDataStorage = localStorage.getItem(FEEDBACK);
    console.log(feedbackDataStorage);
    if (feedbackDataStorage) {
        feedbackDataCurrentObj = JSON.parse(feedbackDataStorage);
        fillInputsFromLocalStorage()
    }
}

function fillInputsFromLocalStorage(){
    labelsAr.forEach(item => {
        const itemName = item.firstElementChild.name;
        if (Object.keys(feedbackDataCurrentObj).includes(itemName)){
            item.firstElementChild.value = feedbackDataCurrentObj[itemName];
        }
    })
}











