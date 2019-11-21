

// place your code below

// Zapisuje w zmiennej input wpisywany w textarea
const inputLS = document.querySelector('.textArea');
// Sprawdza czy licznik counter w localStorage ma jakąś wartość jeśli tak pozostawia ją jeśli nieokreśloną przypisuje 0

// przypisuje do zmiennej couter wartość pobraną z loacalStorage

// tworzy pustą tablicę do której zapiszemy wszystkie wprowadzone elemennty 
myArray=new Array();
myString = '';

const loadButton = document.querySelector('.buttons__load--js');
const saveButton = document.querySelector('.buttons__save--js');
const clearButton = document.querySelector('.buttons__clear--js');
const resetButton = document.querySelector('.buttons__clearInput--js');
const pasteButton = document.querySelector('.buttons__paste--js');

//Nasłuchuje kliknięcia w reset button po czym czyści imput czyli textarea
resetButton.addEventListener('click', (e)=>{inputLS.value="";}, false);
// Nasłuchuje klikniecia load button i wypisuje przez '.innerHTML' pobrane z localStorage dane jeśli są zapiane
loadButton.addEventListener('click', (e)=>{
  for(i=0;i<=localStorage.length;i++){
    myArray[i]=localStorage.getItem(localStorage.key(i));
  }
  // pobiera z tablicy poszczególne elementy i tworzy string gdzie poszczególne elementy tablicy są wypisywane w nowych liniach
   myString=myArray.join('\n');
  
  inputLS.value = myString;

});


saveButton.addEventListener('click',(e)=>{//localStorage.setItem(`inputTextArea ${localStorage.getItem('counter')}`,inputLS.value);
    const key = new Date().toISOString().slice(11, 19); 
    localStorage.setItem(key,inputLS.value);
    inputLS.value = '';
    myArray=[];
    
});

// Nasłuchuje kliknięcia w clear button po czym czyści zawartość localStorage metodą '.clear()'
clearButton.addEventListener('click',(e)=>{localStorage.clear();
        myArray=[];
});
