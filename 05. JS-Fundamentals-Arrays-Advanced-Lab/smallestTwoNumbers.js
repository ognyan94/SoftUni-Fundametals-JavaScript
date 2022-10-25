function smallestTwoNumbers(arr) {
  let lastTwo = arr
    .sort((a, b) => {
      return a - b;
    })
    .slice(0, 2);

  console.log(lastTwo.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
