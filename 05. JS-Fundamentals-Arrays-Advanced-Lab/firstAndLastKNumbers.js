function firstAndLastKNumbers(arr) {
  let count = arr.shift();

  let firstK = arr.slice(0, count);
  let lastK = arr.slice(arr.length - count);
  console.log(firstK.join(" "));
  console.log(lastK.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9]);
