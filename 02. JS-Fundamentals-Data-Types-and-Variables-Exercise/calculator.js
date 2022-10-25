function calculator(firstNum, operator, secNum) {
  let sum = 0;
  switch (operator) {
    case "+":
      sum = firstNum + secNum;
      break;
    case "-":
      sum = firstNum - secNum;
      break;
    case "*":
      sum = firstNum * secNum;
      break;
    case "/":
      sum = firstNum / secNum;
      break;
  }
  console.log(`${sum.toFixed(2)}`);
}
calculator(25.5, "-", 3);
