let firstNumber = prompt("Введи первое число, это приказ:");
let secondNumber = prompt("Введи второе число, немедленно:");
const operator = prompt("Введи оператор, оператор (+, -, *, /):");
firstNumber = +firstNumber;
secondNumber = +secondNumber;
let result;
if (operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if (operator === "*") {
    result = firstNumber * secondNumber;
} else if (operator === "/") {
    result = firstNumber / secondNumber;
} else {
    alert("你的社會評價降低了，黨不高興了!");
}
if (result !== undefined) {
    alert(`Результат: ${result}`);
}