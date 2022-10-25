function muOnline(array) {
  let newArray = array.split("|");
  let health = 100;
  let bitcoin = 0;
  let dead = false;
  let room = 0;
  while (newArray.length !== 0) {
    room++;
    let line = newArray.shift().split(" ");
    let item = line[0];
    let power = Number(line[1]);

    if (item === "potion") {
      health += power;
      if (health > 100) {
        let needHealth =100 - ( health - power);
        health = 100;
        console.log(`You healed for ${needHealth} hp.`);
      } else {
        console.log(`You healed for ${power} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (item === "chest") {
      bitcoin += power;
      console.log(`You found ${power} bitcoins.`);
    } else {
      health -= power;
      if (health <= 0) {
        console.log(`You died! Killed by ${item}.`);
        dead = true;
        break;
      } else {
        console.log(`You slayed ${item}.`);
      }
    }
  }

  if (dead) {
    console.log(`Best room: ${room}`);
  } else {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoin}`);
    console.log(`Health: ${health}`);
  }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
