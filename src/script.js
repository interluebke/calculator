const buttons = document.querySelectorAll("button")

function calculator() {
    let num1 = 1;
    let operator;
    let num2 = 2;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert(typeof(button.id));
            alert(calculate(num1, button.id, num2));
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
    if (n1 === undefined || n2 == undefined) {
        alert("Invalid Operation!");
        calculator();
    } else {
        switch(op) {
            case "add":
                return n1 + n2;
            case "subtract":
                return n1 - n2;
            case "multiply":
                return n1 * n2;
            case "divide":
                return n1 / n2;
        };
    };  
};

calculator();