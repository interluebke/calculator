const buttons = document.querySelectorAll("button")

function calculator() {
    let num1;
    let operator;
    let num2;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert(button.id);
        });
    });
};

function appendNumbers(id) {
    if (operator === undefined) {
        if(isNaN(Number(id))) {

        } else {alert(id);};
    };
};

function calculate(n1, op, n2) {
    switch(op) {
        case op === "add":
            return n1 + n2;
        case op === "subtract":
            return n1 - n2;
        case op === "multiply":
            return n1 * n2;
        case op === "divide":
            return n1 / n2;
    };
};

calculator();