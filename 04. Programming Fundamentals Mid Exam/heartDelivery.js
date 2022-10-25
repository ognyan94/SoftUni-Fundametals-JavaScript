function heartDelivery(array) {
  let neighborhood = array.shift().split("@").map(Number);

  let commands = array.shift();
  let nextJump = 0;

  while (commands !== "Love!") {
    let line = commands.split(" ");
    let jump = line[0];
    let length = Number(line[1]);

    nextJump += length;

    if (nextJump > neighborhood.length - 1) {
      nextJump = 0;
    }
    if (neighborhood[nextJump] > 0) {
      neighborhood[nextJump] -= 2;
      if (neighborhood[nextJump] === 0) {
          console.log( `Place ${nextJump} has Valentine's day.`);
      }
    } else{
      console.log(`Place ${nextJump} already had Valentine's day.`);
    }

    commands = array.shift();
  }

  let count = 0;

  for (const house of neighborhood) {
    if (house > 0) {
      count++;
    }
  }
  console.log(`Cupid's last position was ${nextJump}.`);
  if (count === 0) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${count} places.`);
  }
}
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
console.log("----------------------");
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
