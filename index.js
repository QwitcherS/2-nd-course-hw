let a = 10;
alert(a);
a = 20;
alert(a); // Задание 1

let b = 2007;
alert('Год выпуска первого Iphone - ' + b); // задание 2

let creatorJavaScript = 'Brendan Eich';
alert('Создатель языка JavaScript - ' + creatorJavaScript); //Задание 3

let c = 10;
let d = 2;
let sum = c + d;
let dif = c - d;
let mult = c * d;
let div = c / d;
alert('Сумма переменных = ' + sum);
alert('Разность переменных = ' + dif);
alert('Произведение переменных = ' + mult);
alert('Результат от деления = ' + div); //задание 4

let result = d ** 5;
alert('Результат возведения в степень 2 и 5 = ' + result); //задание 5

a = 9;
b = 2;
result = a % b;
alert('Остаток от деления а на b = ' + result); //задание 6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert('Результат вычислений по заданию №7 - ' + num); // задание 7

let age = prompt('Сколько вам лет?');
alert(age); // задание 8

let user = {
  name:'Bob',
  age: 18,
  isAdmin: true
}; // задание 9.0

user.sityOfResidence = 'Poland'; // 9.1

user.age = 27; // 9.2

delete user.sityOfResidence; // 9.3

let info = prompt('Какую информацию хотите узнать о пользователе?', 'name');

alert(user[info]); // 9.4

let userName =  prompt('Введите ваше имя');
alert(userName); // 10

