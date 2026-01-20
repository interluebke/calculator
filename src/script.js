const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

function calculator() {
    let num1;
    let operator;
    let num2;
    display.textContent = "0";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.id === "calculate") {
                display.textContent = calculate(num1, operator, num2).toString();
            } else if (button.className === "btn op") {
                operator = button.id;
                display.textContent = "0";
            } else if (operator === undefined) {
                num1 = appendNumbers(button.id, num1);
            } else {
                num2 = appendNumbers(button.id, num2);
            };
        });
    });
};



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
        alert("Invalid Operation!");
        calculator();
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

calculator();