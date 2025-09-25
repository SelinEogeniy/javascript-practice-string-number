//todo Напиши функцію isPositive(num), яка приймає число і повертає:

//todo "Positive", якщо воно більше 0

//todo "Negative", якщо менше 0

//todo "Zero", якщо дорівнює 0

function isPositive(num) {
  if (num === 0) {
    console.log("Zero");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}

isPositive(156);
