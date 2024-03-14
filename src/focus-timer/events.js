import state from "./state.js"
import { controls } from "./elements.js"
import * as actions from "./action.js"
import * as elements from './elements.js'
import { updateDisplay } from "./timer.js"

export function registerControls() {
    controls.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (typeof actions[action] != "function") {
            return;
        }
        actions[action]();
    })

}

export function setMinutes() {
    elements.minutes.addEventListener('focus', () => {
        elements.minutes.textContent = '';
    });

    elements.minutes.onkeypress = (e) => {
        if (!/\d/.test(e.key)) {
            e.preventDefault();
        }
    };

    elements.minutes.addEventListener('blur', (e) => {
        let time = e.currentTarget.textContent;
        
        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;

        updateDisplay();
        elements.minutes.removeAttribute('contenteditable')
    })
};