function memoryGame(array) {
  let arrayOfTargets = array.shift().split(" ");

  let commands = array.shift();
  let move = 0;
  let win = false;
  while (commands !== "end") {
    move++;
    let tagets = commands.split(" ");
    let firstIndex = Number(tagets[0]);
    let secIndex = Number(tagets[1]);

    if (
      firstIndex === secIndex ||
      !arrayOfTargets[firstIndex] ||
      !arrayOfTargets[secIndex]
    ) {
      let midInTheArray = arrayOfTargets.length / 2;
      arrayOfTargets.splice(midInTheArray, 0, `-${move}a`, `-${move}a`);
      console.log("Invalid input! Adding additional elements to the board");
    } else if (arrayOfTargets[firstIndex] === arrayOfTargets[secIndex]) {
      console.log(
        `Congrats! You have found matching elements - ${arrayOfTargets[firstIndex]}!`
      );
      let minTarget = Math.min(firstIndex, secIndex);
      let maxTarget = Math.max(firstIndex, secIndex);
      arrayOfTargets.splice(maxTarget, 1);
      arrayOfTargets.splice(minTarget, 1);
    } else if (arrayOfTargets[firstIndex] !== arrayOfTargets[secIndex]) {
      console.log("Try again!");
    }
    if (arrayOfTargets <= 0) {
      win = true;
      console.log(`You have won in ${move} turns!`);
      break;
    }
    commands = array.shift();
  }
  if (!win) {
    console.log(`Sorry you lose :(`);
    console.log(arrayOfTargets.join(" "));
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
console.log("----------------------------------");
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
console.log("----------------------------------");
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
