"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

// Zapisuje w zmiennej input wpisywany w textarea
const inputLS = document.querySelector('.textArea');
localStorage.setItem('counter', 0);
let counter;
let str = [];


const loadButton = document.querySelector('.buttons__load--js');
const saveButton = document.querySelector('.buttons__save--js');
const clearButton = document.querySelector('.buttons__clear--js');
const resetButton = document.querySelector('.buttons__clearInput--js')

//Nasłuchuje kliknięcia w reset button po czym czyści imput czyli textarea
resetButton.addEventListener('click', (e)=>{inputLS.value=""}, false);
// Nasłuchuje klikniecia load button i wypisuje przez '.innerHTML' pobrane z localStorage dane jeśli są zapiane
loadButton.addEventListener('click', (e)=>{/*inputLS.value =(localStorage.getItem(`inputTextArea ${localStorage.getItem('counter')}`))*/
  
    let loader = localStorage.getItem('counter');
    for(let i=loader; i<=0; i--){str.push(localStorage.getItem(`inputTextArea ${i}`))}
  inputLS.value = str;
});


saveButton.addEventListener('click',(e)=>{localStorage.setItem(`inputTextArea ${localStorage.getItem('counter')}`,inputLS.value);
    counter = localStorage.getItem('counter');
    counter++;
    localStorage.setItem('counter',counter);

});
// Nasłuchuje kliknięcia w clear button po czym czyści zawartość localStorage metodą '.clear()'
clearButton.addEventListener('click',(e)=>{localStorage.clear()});




