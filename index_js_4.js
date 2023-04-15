// Задание 1

let a = 1;

while (a < 3) {
  console.log("Привет");
  a++;
}

// Задание 2

let b = 1;

do {
  console.log(b);
  b++;
} while (b <= 5);

// Задание 3

let c = 7;

do {
  console.log(c);
  c++;
} while (c <= 22);

// Задание 4

const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};

for (let name in obj) {
  console.log(`${name} - зарплата ${obj[name]}`);
}

// Задание 5

let n = 1000;

for (let num = 0; num < 6; num++) {
  if (n >= 50) {
    n /= 2;
  } else {
    console.log(n);
    console.log(num);
  }
}

// Задание 6

let firstFriday = 7;

let i = firstFriday;

do {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
  i += 6;
} while (i <= 31);
