function palindromeIntegers(arr) {
  for (let num of arr) {
    let reverseNum = String(num).split("").reverse().join("");
    if (num === Number(reverseNum)) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
