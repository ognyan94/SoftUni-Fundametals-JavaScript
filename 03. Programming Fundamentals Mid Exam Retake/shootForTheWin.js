function shootForTheWin(array) {
  let arrayOfTargets = array.shift().split(" ").map(Number);

  let command = array.shift();
  let counterShoot = 0;
  let arrayShootTarget = [];
  while (command !== "End") {
    let index = Number(command);
    
     if (index >= 0 && index <=arrayOfTargets.length - 1 && arrayOfTargets[index] != -1) {
      counterShoot++;
      let shootNum = arrayOfTargets[index];
      arrayShootTarget.push(index);
      arrayOfTargets[index] = -1;
      for (let i = 0; i < arrayOfTargets.length; i++) {
        if (!arrayShootTarget.includes(i) && shootNum < arrayOfTargets[i]) {
          arrayOfTargets[i] -= shootNum;
        } else if (
          !arrayShootTarget.includes(i) &&
          shootNum >= arrayOfTargets[i]
        ) {
          arrayOfTargets[i] += shootNum;
        }
      }
    }

    command = array.shift();
  }
  console.log(`Shot targets: ${counterShoot} -> ${arrayOfTargets.join(" ")}`);
}
shootForTheWin(["24 50 36 70 -1", "0", "4", "3", "1", "End"]);
