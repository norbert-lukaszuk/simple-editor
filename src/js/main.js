

// place your code below

// Zapisuje w zmiennej input wpisywany w textarea
const inputLS = document.querySelector('.textArea');
// Sprawdza czy licznik counter w localStorage ma jakąś wartość jeśli tak pozostawia ją jeśli nieokreśloną przypisuje 0
if (localStorage.getItem('counter')== null)
{
  localStorage.setItem('counter', 0);
}
else{

};
// przypisuje do zmiennej couter wartość pobraną z loacalStorage
let counter = localStorage.getItem('counter');
// tworzy pustą tablicę do której zapiszemy wszystkie wprowadzone elemennty 
myArray=new Array();


const loadButton = document.querySelector('.buttons__load--js');
const saveButton = document.querySelector('.buttons__save--js');
const clearButton = document.querySelector('.buttons__clear--js');
const resetButton = document.querySelector('.buttons__clearInput--js')

//Nasłuchuje kliknięcia w reset button po czym czyści imput czyli textarea
resetButton.addEventListener('click', (e)=>{inputLS.value="";}, false);
// Nasłuchuje klikniecia load button i wypisuje przez '.innerHTML' pobrane z localStorage dane jeśli są zapiane
loadButton.addEventListener('click', (e)=>{
  for(i=0;i<=localStorage.getItem('counter');i++){
    myArray[i]=localStorage.getItem(`inputTextArea ${i}`);
  }
  // pobiera z tablicy poszczególne elementy i tworzy string gdzie poszczególne elementy tablicy są wypisywane w nowych liniach
  myString=myArray.join('\n');
  localStorage.setItem('savedText',myString);
  inputLS.value =(localStorage.getItem('savedText'));
  
});


saveButton.addEventListener('click',(e)=>{localStorage.setItem(`inputTextArea ${localStorage.getItem('counter')}`,inputLS.value);
    let saveCount = localStorage.getItem('counter');
    counter++;
    localStorage.setItem('counter',counter);
    let arrayElement = (localStorage.getItem(`inputTextArea ${saveCount}`));
    myArray.push(arrayElement);
    
});

// Nasłuchuje kliknięcia w clear button po czym czyści zawartość localStorage metodą '.clear()'
clearButton.addEventListener('click',(e)=>{localStorage.clear();
        localStorage.setItem('counter', 0);
        myArray=[];
        counter=0;
});
        




