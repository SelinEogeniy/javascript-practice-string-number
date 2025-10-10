// Напиши функцію addWord(arr, word),
// яка додає нове слово у кінець масиву (через push)
// і повертає оновлений масив.

function addWord(arr, word) {
  return arr.push(word), arr;
}

console.log(addWord(["JS", "is"], "awesome")); // ["JS", "is", "awesome"]
