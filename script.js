let displayValue = '0';
let num1 = null;
let num2 = null;
let op = null;
let op2 = null;
let result = null;
const buttons = document.querySelectorAll('button');

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => {
    if (b === 0) return "ERROR";
    else return parseFloat((a/b).toFixed(5));
}

const operate = (x, y, operator) => {
    switch (operator){
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
    }
}

const updateDisplay = () => {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    //capping display length
    if (displayValue.length > 9){
        display.innerText = displayValue.substring(0, 9);
    }
}

//initializing display
updateDisplay();

const clickButton = () => {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => {
            if (buttons[i].classList.contains('number')) {
                inputNum(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].id === 'equals') {
                inputEquals();
                updateDisplay();
            }
            else if (buttons[i].classList.contains('operator')) {
                inputOp(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].id === 'clear') {
                clearDisplay();
                updateDisplay();
            }
        });
    }
}

//initializing buttons
clickButton();

const inputNum = (val) => {
    if (op === null) {
        //initial clicks
        if (displayValue === '0' || displayValue === 0){
            displayValue = val;
        } else if (displayValue === num1) {
            //resetting display for num2
            displayValue = val;
        } else {
            displayValue += val;
        }
    } else {
        if (displayValue === num1) {
            //resetting display for num2
            displayValue = val;
        } else {
            displayValue += val;
        }
    }
}

const inputOp = (operator) => {
    //if we have an operator, and user clicks another op
    if (op != null && op2 === null) {
        op2 = operator;
        num2 = displayValue;
        console.log(num1, num2, op);
        result = operate(Number(num1), Number(num2), op);
        console.log(result);
        displayValue = roundAccurately(result,15).toString();
        num1 = displayValue;
        result = null;
    } else if (op != null && op2 != null) {
        //a third operator or onwards
        num2 = displayValue;
        result = operate(Number(num1), Number(num2), op2);
        op2 = operator;
        displayValue = roundAccurately(result,15).toString();
        num1 = displayValue;
        result = null;
    } else {
        //first operator
        op = operator;
        num1 = displayValue;
    }
    console.log(num1, num2, op, op2);
}

const inputEquals = () => {
    if (op == null) {
        displayValue = displayValue;
    } else if (op2 != null) {
        num2 = displayValue;
        result = operate(Number(num1), Number(num2), op2);
        if (result === 'ERROR') displayValue = 'ERROR';
        else {
            displayValue = roundAccurately(result,15).toString();
            num1 = displayValue;
            num2 = null;
            op = null;
            op2 = null;
            result = null;
        }
    } else {
        num2 = displayValue;
        result = operate(Number(num1), Number(num2), op);
        if (result === 'ERROR') displayValue = 'ERROR';
        else {
            displayValue = roundAccurately(result,15).toString();
            num1 = displayValue;
            num2 = null;
            op = null;
            op2 = null;
            result = null;
        }
    }
}

const clearDisplay = () => {
    displayValue = '0';
    num1 = null;
    num2 = null;
    op = null;
    op2 = null;
    result = null;
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
/*
TO DO:
- gotchas
- extras
*/