function blackFlag(array) {
  let day = Number(array.shift());
  let dailyPlunder = Number(array.shift());
  let expectPlunder = Number(array.shift());

  let totalPlunder = 0;

  for (let i = 1; i <= day; i++) {
    totalPlunder += dailyPlunder;
    if (i % 3 === 0) {
      totalPlunder += dailyPlunder * 0.5;
    }
    if (i % 5 === 0) {
      totalPlunder *= 0.7;
    }
  }
  let percentage = (totalPlunder / expectPlunder) * 100;
  if (totalPlunder >= expectPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
