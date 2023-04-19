// Задание 1;

let a;

let b;

function comparison(a, b) {
  return a <= b ? console.log(a) : console.log(b);
}

comparison(20, 15);

// Задание 2;

let c;

function parity(c) {
  
  let d = c % 2;

  if (d == 0) {
    console.log('Число четное');
  } else {
    console.log('Число нечетное');
  }
}

parity (2);

// Задание 3;

let d;

function squaring(d) {
  console.log(d ** 2);
}

squaring(5); // 3.1

function squaringReturn(d) {
  return d ** 2;
}

squaring(5); // 3.2

// Задание 4;

function answer() {

  let userAnswer = Number(prompt('Сколько вам лет?'));

  if (userAnswer < 0) {
    alert('Вы ввели неправильное значение');
  } else if (0 <= userAnswer && userAnswer <= 12) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}

answer();

// Задание 5;

let e;

let f;

function mult(e , f) {
  if (isNaN(e) == true && isNaN == true) {
    alert('Одно или оба значения не являются числом')
  } else {
    console.log(e * f);
  }
}

mult(2 , 10);

mult('re' , 4);

mult(43 , 're');

// Задание 6;

function cubing() {
  let firstNumber = prompt('Введите первое число');

  (isNaN(firstNumber) == true) ? console.log('Переданный параметр не является числом') : console.log(`${firstNumber} в кубе равняется ${firstNumber ** 3}`);
}

cubing();

// Задание 7;

function getAria() {
  let s = 3.14 * (this.radius ** 2);
  return s;
}

function getPerimeter() {
  let p = this.radius * 3.14 * 2;
  return p;
}

const circle1 = {
  radius: 30,
  aria: getAria,
  perimeter: getPerimeter ,
};

const circle2 = {
  radius: 50,
  aria: getAria,
  perimeter: getPerimeter,
};

console.log(circle1.aria());
console.log(circle1.perimeter());
console.log(circle2.aria());
console.log(circle2.perimeter());