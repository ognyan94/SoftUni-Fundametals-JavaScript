function numbers(array) {
  let arrayOfNumbers = array.split(" ").map(Number);
  let sum = 0;

  for (const num of arrayOfNumbers) {
    sum += num;
  }

  let averageNum = sum / arrayOfNumbers.length;

  let upOfNum = arrayOfNumbers
    .filter((x) => averageNum < x)
    .sort((a, b) => b - a);

  let top5 = upOfNum.slice(0, 5);
  if (top5.length === 0) {
    console.log("No");
  } else {
    console.log(top5.join(" "));
  }
}
numbers("1 2 3 4 5");
