let inputValue1 = document.getElementById('keuze1');
let inputValue2 = document.getElementById('keuze2');
let answerText = document.getElementById('antwoord');

function multiply() {
    answerText.innerText = 'Het antwoord is ' + inputValue1.value * inputValue2.value;;
}

function minus() {
    let minusAnswer = inputValue1.value - inputValue2.value;
    answerText.innerText = 'Het antwoord is ' + minusAnswer;
}

function add() {
    let AddAnswer = inputValue1.value + inputValue2.value;
    answerText.innerText = 'Het antwoord is ' + AddAnswer;
}

function devide() {
    let devideAnswer = inputValue1.value / inputValue2.value;
    answerText.innerText = 'Het antwoord is ' + devideAnswer;
}