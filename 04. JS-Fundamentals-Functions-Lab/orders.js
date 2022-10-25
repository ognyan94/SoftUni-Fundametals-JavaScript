function orders(item, num) {
  
  let price = 0;
  switch (item) {
    case `coffee`:
      price = 1.5;
      break;
    case `water`:
      price = 1;
      break;
    case `coke`:
      price = 1.4;
      break;
    case `snacks`:
      price = 2;
      break;
  }
let sum = price * num
console.log(sum.toFixed(2)); 
}
orders("coffee", 2);
