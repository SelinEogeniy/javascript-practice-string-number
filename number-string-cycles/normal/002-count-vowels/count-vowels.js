// Підрахунок голосних (Count Vowels)
// Напиши функцію countVowels(str), яка приймає рядок і повертає кількість голосних букв (a, e, i, o, u).

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Natasha"));
