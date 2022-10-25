function sumDigits(num) {
  let numToString = num.toString();
  let sum = 0;
  for (let digit of numToString) {
    sum += Number(digit);
  }
  console.log(sum);
}
sumDigits(245678);
