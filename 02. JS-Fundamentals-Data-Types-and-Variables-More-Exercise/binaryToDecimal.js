function binaryToDecimal(binary) {
  let decNum = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    let reverse = binary.split("").reverse().join("");
    decNum += Number(reverse[i]) * Math.pow(2, i);
  }
  console.log(decNum);
}
binaryToDecimal("11110000");
