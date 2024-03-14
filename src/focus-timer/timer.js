import state from "./state.js";
import * as elements from "./elements.js";
import { reset } from "./action.js";
import { endTimer } from "./sounds.js";

export function countDown() {
    clearTimeout(state.countDownId)

    if (!state.isRunning) {
        return;
    }

    let minutes = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);
    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if (minutes < 0) {
        reset()
        endTimer.play()
        return;
    }
    updateDisplay(minutes, seconds);
    state.countDownId = setTimeout(() => countDown(), 1000);
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    elements.minutes.textContent = String(minutes).padStart(2, '0');
    elements.seconds.textContent = String(seconds).padStart(2, '0');
}

export function startTimer() {
    if (state.minutes === 0 && state.seconds === 0) {
        state.minutes = 25;
        state.seconds = 0;
    }
    state.isRunning = true;
    countDown();
}