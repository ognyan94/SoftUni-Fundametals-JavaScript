function dungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let splitedRoom = arr[i].split("|");
    let isDeath = false;
    for (let j = 0; j <= splitedRoom.length - 1; j++) {
      let tokens = splitedRoom[j].split(" ");
      let command = tokens[0];
      let quantity = tokens[1];

      if (command === "potion") {
        health += Number(quantity);
        if (health > 100) {
          console.log(
            `You healed for ${Math.abs(quantity - (health - 100))} hp.`
          );
          health = 100;
        } else {
          console.log(`You healed for ${quantity} hp.`);
        }
        console.log(`Current health: ${health} hp.`);
      } else if (command === "chest") {
        coins += Number(quantity);
        console.log(`You found ${quantity} coins.`);
      } else {
        health -= quantity;
        if (health > 0) {
          console.log(`You slayed ${command}.`);
        } else {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${j + 1}`);
          isDeath = true;
          break;
        }
      }
    }
    if (!isDeath) {
      console.log(`You've made it!`);
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    }
  }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
