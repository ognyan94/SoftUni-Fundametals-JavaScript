function carWash(arr) {
  let sum = 0;

  for (let command of arr) {
    switch (command) {
      case "soap":
        soap();
        break;
      case "water":
        water();
        break;
      case "vacuum cleaner":
        vacuumCleaner();
        break;
      case "mud":
        mud();
        break;
    }
  }
  function soap(num) {
    sum += 10;
  }
  function water(num) {
    sum *= 1.2;
  }
  function vacuumCleaner(num) {
    sum *= 1.25;
  }
  function mud(num) {
    sum *= 0.9;
  }
  console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
