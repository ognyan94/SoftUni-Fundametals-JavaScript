function negativeOrPositiveNumbers(arr) {
  let newArr = [];

  for (let num of arr) {
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  console.log(newArr.join("\n"));
}
negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);
