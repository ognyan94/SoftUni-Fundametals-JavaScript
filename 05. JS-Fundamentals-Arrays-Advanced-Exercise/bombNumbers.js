function bombNumbers(arr, action) {
  let bombNum = action[0];
  let bombArea = action[1];

  for (let i = 0; i < arr.length; i++) {
    // let index = Math.max(,0)
    if (arr[i] === bombNum) {
      if (i - bombArea < 0) {
        arr.splice(0, bombArea + 1 + i);
        i--;
      } else {
        arr.splice(i - bombArea, 2 * bombArea + 1);
        i--;
      }
    }
  }
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );
