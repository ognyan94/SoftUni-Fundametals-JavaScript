function signCheck(numOne, numTwo, numThree) {
  let numArr = [numOne, numTwo, numThree];

  let negativeCount = 0;

  for (let num of numArr) {
    if (num < 0) {
      negativeCount++;
    }
  }
  if (negativeCount === 1) {
    console.log(`Negative`);
  } else if (negativeCount === 3) {
    console.log(`Negative`);
  } else {
    console.log(`Positive`);
  }
}
signCheck(1, 2, 3);
