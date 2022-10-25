function sortNumbers(num1, num2, num3) {
  let arrOfNum = [num1, num2, num3];

  let sortOfNum = arrOfNum.sort((a, b) => {
    return b - a;
  });
  sortOfNum.forEach((sort) => {
    console.log(sort);
  });
}
sortNumbers(2, 1, 3);
