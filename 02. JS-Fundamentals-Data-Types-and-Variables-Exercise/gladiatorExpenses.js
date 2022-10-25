function gladiatorExpenses(
  lostFight,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let brokenShield = 0;
  let sum = 0;
  for (let i = 1; i <= lostFight; i++) {
    if (i % 2 === 0) {
      sum += helmetPrice;
    }
    if (i % 3 === 0) {
      sum += swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      sum += shieldPrice;
      brokenShield++;
    }
    if (brokenShield != 0 && brokenShield % 2 === 0) {
      sum += armorPrice;
      brokenShield = 0;
    }
  }
  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
