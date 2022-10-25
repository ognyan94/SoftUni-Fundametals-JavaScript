function factorialDivision(firstNum, secNum) {
  let sumFirsNum = firstNum;
  let sumSecNum = secNum;

  for (let i = firstNum - 1; i >= 1; i--) {
    sumFirsNum *= i;
  }
  for (let j = secNum - 1; j >= 1; j--) {
    sumSecNum *= j;
  }

  console.log((sumFirsNum / sumSecNum).toFixed(2));
}
factorialDivision(5, 2);
