function addAndSubtract(arr) {
  let changeArr = [];

  let sumChangeArr = 0;
  let sumArr = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      changeArr.push(arr[i] + i);
      sumChangeArr += arr[i] + i;
    } else {
      changeArr.push(arr[i] - i);
      sumChangeArr += arr[i] - i;
    }
    sumArr += arr[i];
  }
  console.log(changeArr);
  console.log(sumArr);
  console.log(sumChangeArr);
}
addAndSubtract([-5, 11, 3, 0, 2]);
