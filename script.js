var num1, num2, op;

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => {
    if (b === 0) return "ERROR";
    else return parseFloat((a/b).toFixed(5));
}

const operate = () => {
    switch (op){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

/*
TO DO:
- create functions that populate display
- make calculator work
- gotchas
*/