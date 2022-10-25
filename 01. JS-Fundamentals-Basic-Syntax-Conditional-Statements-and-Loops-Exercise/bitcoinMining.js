function bitcoinMining(gold) {
  let priceGold = 67.51;
  let priceBitcoin = 11949.16;
  let dayCounter = 0;
  let sumOfGold = 0;
  let dayOfBuyBitcoin = false;
  let totalBitcoin = 0;
  let firstDayOfBuyCoin = 0;
  for (let goldPerDay of gold) {
    dayCounter++;
    if (dayCounter % 3 === 0) {
      goldPerDay *= 0.7;
      sumOfGold += priceGold * goldPerDay;
    } else {
      sumOfGold += priceGold * goldPerDay;
    }
    if (sumOfGold >= priceBitcoin) {
      if (dayOfBuyBitcoin === false) {
        dayOfBuyBitcoin = true;
        firstDayOfBuyCoin += dayCounter;
      }
    }
  }
  if (sumOfGold >= priceBitcoin) {
    totalBitcoin += Math.floor(sumOfGold / priceBitcoin);
  }
  sumOfGold -= totalBitcoin * priceBitcoin;

  if (totalBitcoin === 0) {
    console.log(`Bought bitcoins: ${totalBitcoin}`);
    console.log(`Left money: ${sumOfGold.toFixed(2)} lv.`);
  } else {
    console.log(`Bought bitcoins: ${totalBitcoin}`);
    console.log(`Day of the first purchased bitcoin: ${firstDayOfBuyCoin}`);
    console.log(`Left money: ${sumOfGold.toFixed(2)} lv.`);
  }
}
bitcoinMining([50, 100]);
