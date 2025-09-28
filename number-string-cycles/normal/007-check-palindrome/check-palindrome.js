// Перевірка паліндрома (check-palindrome)
// Напиши функцію isPalindrome(str), яка перевіряє, чи є рядок паліндромом (читається однаково зліва направо і справа наліво).

function isPalindrome(str) {
  str = str.toLowerCase();
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr === str;
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
