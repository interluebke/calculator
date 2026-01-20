const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let num1;
let operator;
let num2;
let result = false;

function resetCalculator(n1) {
    if (result) {
        num1 = n1;
        operator = undefined;
        num2 = undefined;
        result = false;
        display.textContent = n1;
    } else {
        num1 = undefined;
        operator = undefined;
        num2 = undefined;
        result = false;
        display.textContent = "0"
    }
}

buttons.forEach((button) => {
button.addEventListener("click", () => {
    if (result && !isNaN(Number(button.id))) {
        resetCalculator(button.id);
    }
    else if(button.id === "clear") {
        result = false;
        resetCalculator();
        return;
    }else if (button.id === "calculate") {
        display.textContent = calculate(num1, operator, num2);
        result = true;
        return;
    } else if (button.className === "btn op") {
        if (operator) {
            num1 = display.textContent = calculate(num1, operator, num2);
            num2 = undefined;
            operator = button.id;
            console.log(num1);
        } else {
            operator = button.id;
            display.textContent += ` ${getOperatorSign(operator)} `;
            return;
        }
    } else if (operator === undefined) {
        num1 = appendNumbers(button.id, num1);
    } else {
        num2 = appendNumbers(button.id, num2);
    };
        });
    });

function getOperatorSign (operator) {
    switch(operator) {
        case "add":
            return "+";
        case "subtract":
            return "-";
        case "multiply":
            return "x";
        case "divide":
            return "÷";
    }
}

function appendNumbers(id, n) {
    if (!isNaN(Number(id))) {
        if (n === undefined) {
            n = id;
            display.textContent = n;
            return n;
        } else {
            n += id;
            display.textContent = n;
            return n;
        }
    } else {
    alert("Error!");
    }
};

function calculate(n1, op, n2) {
    if (n1 === undefined || n2 == undefined) {
        display.textContent = "Invalid Operation!";
        console.log("Invalid OP!");
        resetCalculator();
    } else {
        switch(op) {
            case "add":
                return Number(n1) + Number(n2);
            case "subtract":
                return Number(n1) - Number(n2);
            case "multiply":
                return Number(n1) * Number(n2);
            case "divide":
                return Number(n1) / Number(n2);
        };
    };  
};

resetCalculator();