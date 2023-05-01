// Задание 1;

let a = "js";

a = a.toUpperCase();

console.log(a);

// Задание 2;

const arr1 = ["Кошка", "Кит", "Комар", "Носорог"];

const arr2 = ["яблоко", "груша", "гриб", "огурец"];

const arr3 = ["Дом", "Банк", "Больница", "Театр"];

const arrResult = [];

function searchStart(arr, search) {
  let searchArr = [];

  arr.forEach((arr) => {
    if (arr.toLowerCase().startsWith(search.toLowerCase())) {
      searchArr.push(arr);
    }
  });
  return console.log(searchArr);
}

searchStart(arr1, "ко");

searchStart(arr2, "гру");

searchStart(arr3, "Кино");

// Задание 3;

function num(number) {
  console.log(Math.floor(number));

  console.log(Math.ceil(number));

  console.log(Math.round(number));
}

num(32.58884);

num(32.4);

// Задание 4;

const numbers = [52, 53, 49, 77, 21, 32];

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

console.log(getMaxOfArray(numbers));

console.log(getMinOfArray(numbers));

// Задание 5;

function random() {
  return Math.round(Math.random() * 10);
}

random();

// Задание 6;

function getRandomArrNumbers(number) {

  let arr = [];

  let border = Math.floor(number / 2);

  function randomNum(number) {
    let min = 0;
    return Math.floor(Math.random() * (number - min)) + min;
  };

  for (let i = 0; i < number; i++) {
    if (arr.length < border) {
      arr.push(randomNum(number));
    } else {
      break;
    }
  }
  return arr;
};

getRandomArrNumbers (5);

// Задание 7;

function randomOfTwo(min, max) {
  return console.log(Math.round(Math.random() * (max - min)) + min);
}

randomOfTwo(1, 5);

// Задание 8;

let myDate = new Date();

console.log(myDate);

// Задание 9;

let currentDate = new Date();

console.log(currentDate);

myDate.setDate(73);

console.log(currentDate);

// Задание 10;

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function getDate(Date) {
  let myDate = Date;

  let ruDate =
    "Дата: " +
    myDate.getDate() +
    " " +
    months[myDate.getMonth()] +
    " " +
    myDate.getFullYear() +
    ", " +
    days[myDate.getDay()];

  let ruTime =
    "Время: " +
    myDate.getHours() +
    ":" +
    myDate.getMinutes() +
    ":" +
    myDate.getSeconds();

  console.log(ruDate);
  console.log(ruTime);
}

getDate(new Date());

