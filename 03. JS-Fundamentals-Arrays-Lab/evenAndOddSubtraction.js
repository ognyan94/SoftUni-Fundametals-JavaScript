function evenAndOddSubtraction(numbers) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let textNum of numbers) {
    let num = Number(textNum);

    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  console.log(sumEven - sumOdd);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
