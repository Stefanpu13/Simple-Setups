import {
    toClosestEvenInteger,
    toggleCase
} from './de1';

window.toggleCase = (elementId) => {
    let heading = document.getElementById(elementId);
    heading.innerText = toggleCase(heading.innerText);
};

console.log('great success', toClosestEvenInteger(4.3));
