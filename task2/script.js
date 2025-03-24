let currentInput = '';  
let previousInput = '';  
let operator = '';      
function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
    playButtonSound();
}
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
    playButtonSound();
}
function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    playButtonSound();
}

function calculateResult() {
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
                break;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
    playButtonSound();
}


function playButtonSound() {
    let audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
}
