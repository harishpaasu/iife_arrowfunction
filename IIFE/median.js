const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = (function(array1, array2) {
  const mergedArray = [...array1, ...array2].sort((a, b) => a - b);
  const middleIndex = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  } else {
    return mergedArray[middleIndex];
  }
})(arr1, arr2);

console.log("Median:", median);
