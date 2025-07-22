
const number0 = document.getElementById('number0');
const number1 = document.getElementById('number1');
const number2  = document.getElementById('number2 ');
const number3 = document.getElementById('number3 ');
const number4 = document.getElementById('number4 ');
const number5 = document.getElementById('number5 ');
const number6 = document.getElementById('number6 ');
const number7 = document.getElementById('number7 ');
const number8 = document.getElementById('number8 ');
const number9 = document.getElementById('number9 ');
const dot = document.getElementById('dot');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const division = document.getElementById('division');
const multiply = document.getElementById('multiply');
const equalSign = document.getElementById('equalSign');
const clear = document.getElementById('clear');
let resultDisplay = document.getElementById('resultDisplay');

function textDisplay(clickedElement){ 

  resultDisplay.textContent += clickedElement.textContent;
}
  clearBtn.addEventListener('click', () =>
  resultDisplay.textContent = ''
 
)

function ChangeColor(){
  equalSign.style.backgroundColor = '#ea3b3b';
  equalSign.style.fontSize = '30px'
  multiply.style.fontSize = '30px'
  division.style.fontSize = '30px'
  addition.style.fontSize = '30px'
  subtraction.style.backgroundColor = '#2babbe'
  addition.style.backgroundColor = '#2babbe'
 multiply.style.backgroundColor = '#01bcff'
 division.style.backgroundColor = '#01bcff'
 dot.style.backgroundColor = '#0075beff'
}
ChangeColor();

function normalizeInput(input) {
  return input
    .replace(/×/g, "*")   // Replace fancy multiply
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/[^\d+\-*/().\s]/g, "") // remove non-math junk
    .trim();

}

equalSign.addEventListener("click", () =>{

  let userInput = resultDisplay.textContent.trim();
   userInput = normalizeInput(userInput);
  const result = eval(userInput)
  resultDisplay.textContent =  `${result}`
});
