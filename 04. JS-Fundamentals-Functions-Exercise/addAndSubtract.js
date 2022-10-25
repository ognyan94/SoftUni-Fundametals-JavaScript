function addAndSubtract(firstNummber, secondNumber, lastNumber) {
  function add(firstNum, secNum) {
    let sumOfTwoNumbers = firstNum + secNum;
    return sumOfTwoNumbers;
  }
  let sum = add(firstNummber, secondNumber);

  function subtract(sumOfTwo, lastNum) {
    return sumOfTwo - lastNum;
  }

  let result = subtract(sum, lastNumber);
  console.log(result);
}
addAndSubtract(23, 6, 10);
