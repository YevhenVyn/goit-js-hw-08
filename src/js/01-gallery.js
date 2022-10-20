import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryBoxRef = document.querySelector('.gallery');
const galleryCards = createGalleryCard(galleryItems);
galleryBoxRef.insertAdjacentHTML('beforeend', galleryCards);
galleryBoxRef.addEventListener('click',handleGalleryImageClick);
const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData : 'alt',
  captionDelay : 250,
 });
 lightbox.on('show.simplelightbox', function () {
});

function createGalleryCard(elements) {
    return elements.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    })
    .join('');
};


function handleGalleryImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image'))
  {return};
};

console.log(galleryItems);
