function reverseAnArrayOfNumbers(n, numbers) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(numbers[i]);
  }
  arr.reverse();
  console.log(arr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
