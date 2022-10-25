function manOWar(array) {
  let pirateShip = array.shift().split(">").map(Number);
  let warShip = array.shift().split(">").map(Number);
  let maxHealth = Number(array.shift());
    
  let commands = array.shift();
  let status = true;
  while (commands !== "Retire") {
    let line = commands.split(" ");
    let action = line.shift();
    let dead = false
    switch (action) {
      case "Fire":
        let indexPirateFire = Number(line[0]);
        let pirateShipPower = Number(line[1]);
        if (indexPirateFire >= 0 && indexPirateFire < warShip.length) {
          warShip[indexPirateFire] -= pirateShipPower;
          if (warShip[indexPirateFire] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            status = false;
            dead = true
            break;
          }
        }

        break;
      case "Defend":
        let startIndex = Number(line[0]);
        let endIndex = Number(line[1]);
        let powerWarShip = Number(line[2]);

        if ((startIndex !== endIndex) &&(startIndex >= 0 && startIndex < pirateShip.length)&&(endIndex >= 0 && endIndex < pirateShip.length)) {
          
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= powerWarShip;
            if (pirateShip[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              status = false;
              dead = true
              break;
            }
          }
        }
        break;
      case "Repair":
        let repireIndex = Number(line[0]);
        let health = Number(line[1]);

        if (repireIndex >= 0 && repireIndex < pirateShip.length) {
          pirateShip[repireIndex] += health;
          if (pirateShip[repireIndex] > maxHealth) {
            pirateShip[repireIndex] = maxHealth;
          }
        }
        break;
      case "Status":
        let count = 0;
        let repireValue = maxHealth * 0.2;
        for (const num of pirateShip) {
          if (num < repireValue) {
            count++;
          }
        }
        console.log(`${count} sections need repair.`);
        break;
    }

    commands = array.shift();
        if(dead){
            commands = "Retire" 
        }
  }
  if (status) {
    let statusPirateShip = 0;
    let statusWarShip = 0;
    for (const numPirate of pirateShip) {
      statusPirateShip += numPirate;
    }
    for (const numWar of warShip) {
      statusWarShip += numWar;
    }
    console.log(`Pirate ship status: ${statusPirateShip}`);
    console.log(`Warship status: ${statusWarShip}`);
  }
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
console.log("------------------");
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
