import Vimeo from "@vimeo/player";
import _throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const KEY_TIME = "videoplayer-current-time";

setStartPlayingTime();
player.on('timeupdate', _throttle (getVideoTime, 1000));


function getVideoTime (currentTime) {
    localStorage.setItem(KEY_TIME, `${currentTime.seconds}`);
}

function setStartPlayingTime () {
    const startPlayingTimeValue = Number(localStorage.getItem (KEY_TIME));
    if (startPlayingTimeValue) {
        console.log(`Video will start from ${startPlayingTimeValue} second`);
    player.setCurrentTime(startPlayingTimeValue);
    };
}

