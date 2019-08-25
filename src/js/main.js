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

// if (localStorage.getItem('input')){
//   inputLS.value = localStorage.getItem('input');
// }

// inputLS.addEventListener('keyup',(e) => {console.log(e.target.value)});
// inputLS.addEventListener('keyup',(e) => {localStorage.setItem('inputTextArea',e.target.value)});

// Przypisuje do zmiennych buttony na podstawie ich klas z modyfikarem '--js'
const loadButton = document.querySelector('.buttons__load--js');
const saveButton = document.querySelector('.buttons__save--js');
const clearButton = document.querySelector('.buttons__clear--js');
const resetButton = document.querySelector('.buttons__clearInput--js')

// Nasłuchuje klikniecia load button i wypisuje przez '.innerHTML' pobrane z localStorage dane jeśli są zapiane
loadButton.addEventListener('click', (e)=>{inputLS.innerHTML=(localStorage.getItem('inputTextArea'))});

saveButton.addEventListener('click',(e)=>{localStorage.setItem('inputTextArea',inputLS.value)});
// Nasłuchuje kliknięcia w clear button po czym czyści zawartość localStorage metodą '.clear()'
clearButton.addEventListener('click',(e)=>{localStorage.clear()});

 function newFunction() {document.getElementById("textArea").reset();}




