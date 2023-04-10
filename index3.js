// Задание 1

let password = "пароль";

let userPassword = String(prompt("Введите пароль"));

if (password === userPassword) {
  console.log("Пароль верный");
} else {
  console.log("Неверный пароль");
}

// Задание 2

let c = -3;
c > 0 && c < 10 ? console.log("Верно") : console.log("Неверно");

// Задание 3

let d = 40;
let e = 120;

d > 100 || e > 100 ? console.log("Верно") : console.log("Неверно");

// Задание 4

let a = Number("2");
let b = Number("3");

alert(a + b);

// Задание 5

let mounthNumber;
let userAnswer = Number(prompt("Введите номер месяца"));
switch (userAnswer) {
  case 1:
    console.log("Январь, сезон: зима");
    break;
  case 2:
    console.log("Февраля, сезон: зима");
    break;
  case 3:
    console.log("Март, сезон: весна");
    break;
  case 4:
    console.log("Апрель, сезон: весна");
    break;
  case 5:
    console.log("Май, сезон: весна");
    break;
  case 6:
    console.log("Июнь, сезон: лето");
    break;
  case 7:
    console.log("Июль, сезон: лето");
    break;
  case 8:
    console.log("Август, сезон: лето");
    break;
  case 9:
    console.log("Сентябрь, сезон: осень");
    break;
  case 10:
    console.log("Октябрь, сезон: осень");
    break;
  case 11:
    console.log("Ноябрь, сезон: осень");
    break;
  case 12:
    console.log("Декабрь, сезон: зима");
    break;
  default:
    console.log("Что-то не то. Попробуй снова");
    break;
}

// Задание 7

let number = Number(prompt("Пожалуйста, введите любое число"));
if (number === NaN) {
  console.log("Это не число");
} else {
  num = number / 2;
}
if (num = 0) {
  console.log("Число является четным");
} else {
  console.log("Число является нечетным");
}
