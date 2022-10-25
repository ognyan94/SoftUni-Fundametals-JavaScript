function movingTarget(array) {
  let arrayOfTargets = array.shift().split(" ").map(Number);

  let commands = array.shift();
  while (commands !== "End") {
    let line = commands.split(" ");
    let action = line[0];
    let index = Number(line[1]);
    let power = Number(line[2]);

    switch (action) {
      case "Shoot":
        if (arrayOfTargets[index]) {
          arrayOfTargets[index] -= power;
          if (arrayOfTargets[index] <= 0) {
            arrayOfTargets.splice(index, 1);
          }
        }
        break;
      case "Add":
        if (arrayOfTargets[index]) {
          arrayOfTargets.splice(index, 0, power);
        }else{
            console.log("Invalid placement!");
        }
        break;
      case "Strike":
        let radius = power;
        let firstIndex = index - radius;
        let lastIndex = radius * 2 + 1;
        if (arrayOfTargets[firstIndex] && arrayOfTargets[lastIndex]) {
          arrayOfTargets.splice(firstIndex,lastIndex);
        } else {
          console.log("Strike missed!");
        }
        break;
    }
    commands = array.shift();
  }
console.log(arrayOfTargets.join("|"));
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
;
