

// place your code below

// Zapisuje w zmiennej input wpisywany w textarea
const inputLS = document.querySelector('.textArea');
if (localStorage.getItem('counter')== null)
{
  localStorage.setItem('counter', 0);
}
else{

};
let counter = localStorage.getItem('counter');
myArray=new Array();


const loadButton = document.querySelector('.buttons__load--js');
const saveButton = document.querySelector('.buttons__save--js');
const clearButton = document.querySelector('.buttons__clear--js');
const resetButton = document.querySelector('.buttons__clearInput--js')

//Nasłuchuje kliknięcia w reset button po czym czyści imput czyli textarea
resetButton.addEventListener('click', (e)=>{inputLS.value="";
      
}, false);
// Nasłuchuje klikniecia load button i wypisuje przez '.innerHTML' pobrane z localStorage dane jeśli są zapiane
loadButton.addEventListener('click', (e)=>{
  for(i=0;i<=localStorage.getItem('counter');i++){
    myArray[i]=localStorage.getItem(`inputTextArea ${i}`);
  }
  

  localStorage.setItem('savedText',myArray);
  inputLS.value =(localStorage.getItem('savedText'));
  // console.log(counter);
  // counter++;
  
  
  //   let loader = localStorage.getItem('counter');
  //   for(let i=loader; i<=0; i--){myArray.push(localStorage.getItem(`inputTextArea ${i}`))}
  // inputLS.value = myArray;
});


saveButton.addEventListener('click',(e)=>{localStorage.setItem(`inputTextArea ${localStorage.getItem('counter')}`,inputLS.value);
    let saveCount = localStorage.getItem('counter');
    counter++;
    localStorage.setItem('counter',counter);
    let arrayElement = (localStorage.getItem(`inputTextArea ${saveCount}`));
    console.log(arrayElement);
    myArray.push(arrayElement);
    console.log(myArray);
    

});
// Nasłuchuje kliknięcia w clear button po czym czyści zawartość localStorage metodą '.clear()'
clearButton.addEventListener('click',(e)=>{localStorage.clear();
        localStorage.setItem('counter', 0);
        myArray=[];
});




