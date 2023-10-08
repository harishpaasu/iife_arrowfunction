const strings = ["racecar", "hello", "level", "world", "deified"];

const palindromes = (function(arr) {
  function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  }

  return arr.filter(function(str) {
    return isPalindrome(str);
  });
})(strings);

console.log("Palindromes:", palindromes);
