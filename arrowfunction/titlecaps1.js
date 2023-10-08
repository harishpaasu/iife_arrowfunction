const stringArray = ["hello world", "good morning", "title case example"];
const titleCaseArray = stringArray.map((str) =>
  str
    .split(" ")
    .map((word) =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ")
);
console.log(titleCaseArray);
