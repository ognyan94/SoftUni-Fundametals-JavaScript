function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let stringNum = i.toString();
    for (let number of stringNum) {
      sum += Number(number);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
specialNumbers(15);
