  const stringArray = ["hello world", "good morning", "title case example"];

const titleCaseArray = (function(arr) {
  return arr.map(function(str) {
    return str
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
})(stringArray);

console.log(titleCaseArray);

  