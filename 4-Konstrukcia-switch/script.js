x = +prompt("Input number from 1 to 6");
switch (x) {
    case 2:
    case 4:
    case 6:
        alert("even");
        break;
    case 1:
    case 3:
    case 5:
        alert("odd");
        break;
    default:
        alert("Out of range");
}
let distance = prompt("Введите расстояние доставки в милях:");
let weight = prompt("Введите вес груза в фунтах:");
let cargoType = prompt("Введите тип груза (обычный, необычный, офигенный):");
let transportType = prompt("Введите тип транспорта (легковушка, грузовичек, самолетъ):");
let basePrice;
if (distance <= 50) {
    basePrice = 500;
} else if (distance > 50 && distance <= 100) {
    basePrice = 1000;
} else {
    basePrice = 1500;
}
let weightPrice = 0;
if (weight > 10) {
    weightPrice = 500;
}
let cargoPrice = 0;
switch (cargoType) {
    case "обычный":
        cargoPrice = 0;
        break;
    case "необычный":
        cargoPrice = 1000;
        break;
    case "офигенный":
        cargoPrice = 2000;
        break;
    default:
        console.log("再進來吧，低社會農民!")
}
let transportPrice = 0;
switch (transportType) {
    case "легковушка":
        transportPrice = 500;
        break;
    case "грузовичек":
        transportPrice = 1500;
        break;
    case "самолетъ":
        transportPrice = 5000;
        break;
    default:
        console.log("再進來吧，低社會農民!")
}
let totalCost = basePrice + weightPrice + cargoPrice + transportPrice;
alert(`Стоимость доставки: ${totalCost} руб.`);