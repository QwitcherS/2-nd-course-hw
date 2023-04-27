document.querySelector("#gameSeasons").onclick = function seasons() {
  let mounthNumber = Number(prompt("Введите номер месяца"));

  if (mounthNumber == 1 || mounthNumber == 2 || mounthNumber == 12) {
    alert("Сезон: Зима");
  } else if (mounthNumber >= 3 && mounthNumber <= 5) {
    alert("Сезон: Весна");
  } else if (mounthNumber >= 6 && mounthNumber <= 8) {
    alert("Сезон: Лето");
  } else if (mounthNumber >= 9 && mounthNumber <= 11) {
    alert("Сезон: Осень");
  } else {
    alert("Нет такого месяца!");
    alert("Их всего 12 :-)");
  }
};

document.querySelector("#gameWords").onclick = function words() {
  let list = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  list = list.sort(() => Math.random() - 0.5);

  let wordsAlert = alert(list);

  let firstAnswer = prompt("Чему равнялся первый элемент массива?");

  firstAnswer = firstAnswer.toLocaleLowerCase();
  firstItem = list[0];
  firstItem = firstItem.toLocaleLowerCase();

  let secondAnswer = prompt("Чему равнялся последний элемент массива?");

  secondAnswer = secondAnswer.toLocaleLowerCase();
  secondItem = list[1];
  secondItem = secondItem.toLocaleLowerCase();

  if (firstItem === firstAnswer && secondItem === secondAnswer) {
    alert("Поздравляю! Все верно!");
  } else if (firstItem !== firstAnswer && secondItem !== secondAnswer) {
    alert("К сожалению, нет правильных ответов. Попробуйте снова.");
  } else {
    alert("Вы были близки к победе!");
  }
};
