import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const counter = document.querySelector('.counter--js');
const buttonAdd = document.querySelector('.add--js');
const buttonDelete = document.querySelector('.delete--js');
const key = new Date().toLocaleString().slice(0, 10);

let currentCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) { 
    currentCounter = localStorageValue;
} else {
    localStorage.setItem(key, currentCounter);
}

counter.innerHTML = currentCounter;

buttonAdd.addEventListener('click', () => {
currentCounter++;
counter.innerHTML = currentCounter;
localStorage.setItem(key, currentCounter);
});

buttonDelete.addEventListener('click', () => {
if (currentCounter > 0) {
    currentCounter--;
}
counter.innerHTML = currentCounter;
localStorage.setItem(key, currentCounter);
});

