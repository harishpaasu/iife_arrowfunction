function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    const part1 = arr.slice(0, n - k);
    const part2 = arr.slice(n - k);
    const rotatedArray = part2.concat(part1);
    return rotatedArray;
  }
  const originalArray = [1, 2, 3, 4, 5];
  const rotationCount = 2;
   const rotatedArray = rotateArray(originalArray, rotationCount);
  console.log(rotatedArray);