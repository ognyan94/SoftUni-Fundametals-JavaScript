function treasureHunt(array) {
  let treasure = array.shift().split("|");

  let commands = array.shift();

  while (commands !== "Yohoho!") {
    let line = commands.split(" ");
    let action = line.shift();
    let index = Number(line[0]);
    switch (action) {
      case "Loot":
        let items = line;
        for (const item of items) {
          if (!treasure.includes(item)) {
            treasure.unshift(item);
          }
        }
        break;
      case "Drop":
        if (index >= 0 && index < treasure.length) {
          let dropItem = treasure[index];
          treasure.splice(index, 1);
          treasure.push(dropItem);
        }

        break;
      case "Steal":
        let lastItems = treasure.splice(-index);
        console.log(lastItems.join(", "));
        break;
    }
    commands = array.shift();
  }
  let totalSum = 0;

  for (const item of treasure) {
    totalSum += item.length;
  }
  let averageSum = totalSum / treasure.length;
  if (totalSum === 0) {
      console.log("Failed treasure hunt.");
    } else {
      console.log(
        `Average treasure gain: ${averageSum.toFixed(2)} pirate credits.`
      );
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
console.log("---------------------------");
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
