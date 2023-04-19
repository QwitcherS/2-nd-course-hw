document.querySelector("#gameSeasons").onclick = function seasons() {
  let mounthNumber = Number(prompt("Введите номер месяца"));

  if (mounthNumber == 1 || mounthNumber == 2 || mounthNumber == 12) {
    alert('Сезон: Зима');
  } else if (mounthNumber >= 3 && mounthNumber <= 5) {
    alert('Сезон: Весна');
  } else if (mounthNumber >= 6 && mounthNumber <= 8) {
    alert('Сезон: Лето');
  } else if (mounthNumber >= 9 && mounthNumber <= 11) {
    alert('Сезон: Осень');
  } else {
    alert('Нет такого месяца!')
    alert('Их всего 12 :-)')
  }
}









