// Напиши функцію getLastWord(str),
// яка приймає рядок і повертає останнє слово.
// (Використай split())

//~ var 1
function getLastWord(str) {
  return str.slice(str.lastIndexOf(" ") + 1);
}

console.log(getLastWord("I love JavaScript")); // "JavaScript"
