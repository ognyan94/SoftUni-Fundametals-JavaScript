function arrayModifier(array) {
  let arrayOfNum = array.shift().split(" ").map(Number);

  let commands = array.shift();

  while (commands !== "end") {
    let [command, firstIndex, secIndex] = commands.split(" ");

    switch (command) {
      case "swap":
        let firstNum = arrayOfNum[firstIndex];
        let secNum = arrayOfNum[secIndex];
        arrayOfNum[firstIndex] = secNum;
        arrayOfNum[secIndex] = firstNum;
        break;
      case "multiply":
        arrayOfNum[firstIndex] *= arrayOfNum[secIndex];
        break;
      case "decrease":
        arrayOfNum = arrayOfNum.map((x) => x - 1);
        break;
    }

    commands = array.shift();
  }
  console.log(arrayOfNum.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
