function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let precisNum = num.toFixed(precision);

  console.log(parseFloat(precisNum));
}
rounding(10.5, 3);
