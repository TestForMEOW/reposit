for (let i = 0; i < 10; i++) {
    console.log("Goodbye world!");
}
let balance = parseInt(prompt("Введите начальный баланс:"));
let years = 0;
const targetAmount = 1000000;
while (balance < targetAmount) {
    balance *= 1.1;
    years++;
}
document.write(
    `Вам понадобится ${years} лет, чтобы достичь суммы в ${targetAmount} у.е.`
);
let input;
do {
    input = prompt("Введите число от 1 до 10");
} while (input < 1 || input > 10);
console.log("Вы ввели число " + input);
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}