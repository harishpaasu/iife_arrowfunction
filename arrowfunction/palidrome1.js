const strings = ["racecar", "hello", "level", "world", "deified"];

const isPalindrome = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
};

const palindromes = strings.filter((str) => isPalindrome(str));

console.log("Palindromes:", palindromes);
