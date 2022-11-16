let total = "";
let previousNumber = 0;
let mathOperator = ""
let newNumber = false;

buttons = document.getElementsByTagName('button');
display = document.getElementById('display');

for(const button of buttons) {
    button.addEventListener('click', e => {
        buttonText = e.target.textContent;

        if (buttonText === "AC") {
            total = "0";
            display.textContent = total;
        } else if (buttonText === "±") {
            total = String(Number(total) * -1);
            display.textContent = total;
        } else if (buttonText === "%"){
            total = Number(total) / 100;
            display.textContent = total;
        } else if (buttonText === "÷") {
            previousNumber = Number(total);
            mathOperator = "/";
            newNumber = true;
        } else if (buttonText === "X") {
            previousNumber = Number(total);
            mathOperator = "X";
            newNumber = true;
        } else if (buttonText === "-") {
            previousNumber = Number(total);
            mathOperator = "-";
            newNumber = true;
        } else if (buttonText === "+") {
            previousNumber = Number(total);
            mathOperator = "+";
            newNumber = true;
        } else if (buttonText === "=") {
            if (mathOperator === "/") {
                total = previousNumber / Number(total);
            } else if (mathOperator === "X") {
                total = previousNumber * Number(total);
            } else if (mathOperator === "-") {
                total = previousNumber - Number(total);
            } else if (mathOperator === "+") {
                total = previousNumber + Number(total);
            }

            display.textContent = total;
            mathOperator = "";
        } else {
            if (newNumber || total === "0") {
                total = buttonText;
                newNumber = false;
            } else {
                total += buttonText;
            }

            display.textContent = total;
        }
    })
}
