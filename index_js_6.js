// Задание 1;

const arrayFirst = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrayFirst.length; i++) {
	if (arrayFirst[i] <= arrayFirst[4]) break;
  console.log(arrayFirst[i])
  }

// Задание 2;

console.log(arrayFirst.indexOf(4));

// Задание 3;

let arraySecond = [1, 3, 5, 10, 20];

arraySecond = arraySecond.join(['']);
console.log(arraySecond);

// Задание 4;

const arrayThird = [
  [1, 1, 1], 
  [1, 1, 1], 
  [1, 1, 1],
];

for (let arrayOne of arrayThird) {
  console.log(arrayOne);
}

// Задание 5;

const arrFive = [1, 1, 1];

arrFive.push(2, 2, 2);
console.log(arrFive);

// Задание 6;

let arrSix = [9, 8, 7, 'a', 6, 5];

arrSix.sort();
console.log(arrSix);

arrSix.pop();
console.log(arrSix);

// Задание 7;

const arrSearch = [9, 8, 7, 6, 5];

let i = Number(prompt('Введите число, которую хотите найти'));

let search = arrSearch.includes(i);
console.log(search);

// Задание 8;

let arrRevers ='abcdef';

arrRevers = arrRevers.split('');
console.log(arrRevers);

arrRevers = arrRevers.reverse();
console.log(arrRevers);

arrRevers = arrRevers.join('');
console.log(arrRevers);

// Задание 9;

const arrNine = [
  [1, 2, 3],
  [4, 5, 6],
];

for (let arrayOne of arrNine) {
  for (let item of arrayOne) {
    console.log(item);
  }
}; 

// Задание 10;

const arrTen = [3, 7, 1, 9, 6, 2, 4, 10, 5, 8];

for (let i = 0; i <= arrTen.length; i++ ) {
  
  console.log(arrTen[i] + arrTen[i + 1]);
};

// Задание 11;

const arrEleven = [3, 7, 1, 9];

const roots = arrEleven.map((num) => num ** 2);

console.log(roots);

// Задание 12;

const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];

const getLength = source => source.map(str => str.length);

console.log(getLength(words));

// Задание 13;

const arr = [0, 22, -1, 18, 55, -29, 9, -26, -2, 16, 17,];


function num(arr) {
const arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
       arr1.push(arr[i])
    }
  }
  return arr1;
}

console.log(num(arr));