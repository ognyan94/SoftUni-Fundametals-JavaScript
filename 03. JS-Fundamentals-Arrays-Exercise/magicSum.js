function magicSum(arr, num) {
  let arrL = arr.length;

  for (let i = 0; i < arrL; i++) {
    let sum = 0;
    for (let j = i + 1; j < arrL; j++) {
      sum += arr[i] + arr[j];
      if (sum === num) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
      sum = 0;
    }
  }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
