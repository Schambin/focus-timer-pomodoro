import state from "./state.js";
import * as timer from './timer.js';
import * as element from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countDown();
    sounds.buttonPressAudio.play();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();

    sounds.buttonPressAudio.play();
}

export function set() {
    element.minutes.setAttribute('contenteditable', true);
    element.minutes.focus();
}

export function toggleMusic() {
    state.isMuted = document.documentElement.classList.toggle('music-on')

    if (state.isMuted) {
        sounds.bgSound.play();
        return;
    }
    sounds.bgSound.pause();
}