var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var resultDisplay = document.getElementById("result");
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
function calculate(operation) {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var result;
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
addButton.addEventListener("click", function () { return calculate("add"); });
subtractButton.addEventListener("click", function () { return calculate("subtract"); });
multiplyButton.addEventListener("click", function () { return calculate("multiply"); });
divideButton.addEventListener("click", function () { return calculate("divide"); });
