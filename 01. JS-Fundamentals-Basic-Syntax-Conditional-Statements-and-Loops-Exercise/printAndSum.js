function printAndSum(start, end) {
  let row = "";
  let sum = 0;
  for (let i = start; i <= end; i++) {
    row += i + " ";
    sum += i;
  }
  console.log(row);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
