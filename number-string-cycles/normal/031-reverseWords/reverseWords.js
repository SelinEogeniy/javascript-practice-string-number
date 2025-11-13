// normal — reverseWords

// Умова:
// Напиши функцію reverseWords(sentence), яка приймає рядок і виводить слова у зворотному порядку.
// (Не символи, а саме слова.)

function reverseWords(sentence) {
  return sentence.split(" ").toReversed().join(" ");
}

console.log(reverseWords("I love coding")); // "coding love I"
