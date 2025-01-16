const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const resultDisplay = document.getElementById("result") as HTMLSpanElement;


const addButton = document.getElementById("add") as HTMLButtonElement;
const subtractButton = document.getElementById("subtract") as HTMLButtonElement;
const multiplyButton = document.getElementById("multiply") as HTMLButtonElement;
const divideButton = document.getElementById("divide") as HTMLButtonElement;

function calculate(operation: string) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result: number;

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "մուտքագրված թվերը սխալ են";
        return;
    }

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 == 0) {
                resultDisplay.textContent = "չի կարելի 0ի բաժանել";
                return;
            }

            result = num1 / num2;
            break;
        default:
            result = 0;

    }
    resultDisplay.textContent = result.toString();

}

addButton.addEventListener("click", () => calculate("add"));
subtractButton.addEventListener("click", () => calculate("subtract"));
multiplyButton.addEventListener("click", () => calculate("multiply"));
divideButton.addEventListener("click", () => calculate("divide"));
