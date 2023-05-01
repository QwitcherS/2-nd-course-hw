// Задание 1;

const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

console.log(
  people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  })
);

// Задание 2;

function isPositive(arr) {
  let a = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      a.push(arr[i]);
    }
  }

  return a;
}

function isMale(arr) {
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      b.push(arr[i]);
    }
  }

  return b;
}
function filter(arr, callback) {
  let result = callback(arr);

  return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3;

const timer = (deadline) => {
  if (isNaN(+deadline)) {
    console.log("Передано некорректное число");
    return;
  }

  let time = deadline;
  const interval = setInterval(() => {
    time -= 3;
    nowTime = new Date();
    console.log(nowTime);
  }, 3000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
  }, deadline * 3000);
};

timer(30);

// Задание 4;

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});

// Задание 5;

function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  setTimeout(() => {
    console.log(`Привет, ${name}!`);
  }, 2000);
}

delayForSecond(sayHi("Глеб"));
