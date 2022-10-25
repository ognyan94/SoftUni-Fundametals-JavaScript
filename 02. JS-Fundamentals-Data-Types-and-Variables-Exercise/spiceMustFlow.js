function spiceMustFlow(startingYield) {
  let totalSpice = 0;
  let dayCounter = 0;
  while (startingYield >= 100) {
    dayCounter++;
    totalSpice += startingYield;
    startingYield -= 10;
    if (totalSpice >= 26) {
      totalSpice -= 26;
    } else {
      break;
    }
  }
  totalSpice -= 26;
  if (totalSpice < 0) {
    totalSpice = 0;
  }
  console.log(dayCounter);
  console.log(totalSpice);
}
spiceMustFlow(10);
