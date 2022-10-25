function computerStore(array) {
  let sum = 0;

  let typeDiscount = "";
  for (let i = 0; i < array.length; i++) {
    let command = array[i];
    if (command === "special") {
      typeDiscount = "special";
      break;
    } else if (command === "regular") {
      typeDiscount = "regular";
      break;
    }
    if (Number(command) < 0) {
      console.log("Invalid price!");
    } else {
      sum += Number(command);
    }
  }
  if (sum <= 0) {
    console.log("Invalid order!");
  } else {
    let taxes = sum * 0.2;
    let totalSum = sum + taxes;
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    if (typeDiscount === "special") {
      totalSum *= 0.9;
      console.log(`Total price: ${totalSum.toFixed(2)}$`);
    } else if (typeDiscount === "regular") {
      console.log(`Total price: ${totalSum.toFixed(2)}$`);
    }
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);

computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);

computerStore(["regular"]);
