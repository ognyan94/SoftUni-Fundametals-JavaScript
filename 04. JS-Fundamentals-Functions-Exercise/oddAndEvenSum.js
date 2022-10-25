function oddAndEvenSum(nums) {
  let numToStr = String(nums);

  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i <= numToStr.length - 1; i++) {
    let num = Number(numToStr[i]);
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(3495892137259234);
