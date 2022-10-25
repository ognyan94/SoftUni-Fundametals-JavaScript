function sumEvenNumbers(numbers) {
  let sumEven = 0;

  for (let num of numbers) {
    if (Number(num) % 2 === 0) {
      sumEven += Number(num);
    }
  }
  console.log(sumEven);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
