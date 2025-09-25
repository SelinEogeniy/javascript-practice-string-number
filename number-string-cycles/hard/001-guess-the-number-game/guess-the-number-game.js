//todo Гра "Вгадай число" (Guess the Number Game)
//todo Напиши програму, яка:

//todo генерує випадкове число від 1 до 10;

//todo запитує користувача ввести число (поки він не вгадає або не введе 0, щоб вийти);

//todo підказує: "більше" або "менше" відносно загаданого числа.

//todo (Підказка: використай while або do...while цикл).

function guessNumberGame() {
  const secret = Math.floor(Math.random() * 10) + 1;
  let guess;

  do {
    const input = prompt("Вгадай число від 1 до 10, захочешь вийти натисни 0");
    if (input === null) {
      alert("Гру скасовано. Загадане число було: " + secret);
      return;
    }
    guess = Number(input);

    if (guess === 0) {
      alert("Гру скасовано. Загадане число було: " + secret);
      break;
    }

    if (guess === secret) {
      alert("Ви вгадали");
      break;
    } else if (guess < secret) {
      alert("Приховане число більше");
    } else if (guess > secret) {
      alert("Приховане число менше");
    }
  } while (true);
}
guessNumberGame();
