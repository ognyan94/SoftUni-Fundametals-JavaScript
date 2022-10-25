function theHuntingGames(array) {
  let days = Number(array.shift());
  let players = Number(array.shift());
  let groupsEndergy = Number(array.shift());
  let waterForOnePers = Number(array.shift());
  let foodForOnePers = Number(array.shift());
  let currentDay = 0;
  let finish = true;

  let totalWater = days * players * waterForOnePers;
  let totalFood = days * players * foodForOnePers;
  while (array.length > 0) {
    currentDay++;
    let lostEnergy = Number(array.shift());
    groupsEndergy -= lostEnergy;
    if (groupsEndergy <= 0) {
        finish = false;
        console.log(
          `You will run out of energy. You will be left with ${totalFood.toFixed(
            2
          )} food and ${totalWater.toFixed(2)} water.`
        );
        break;
      }
    if (currentDay % 2 === 0) {
      groupsEndergy *= 1.05;
      totalWater *= 0.7;
    }
    if (currentDay % 3 === 0) {
      totalFood -= totalFood / players;
      groupsEndergy *= 1.1;
    }
    
  }
  if (finish) {
    console.log(
      `You are ready for the quest. You will be left with - ${groupsEndergy.toFixed(
        2
      )} energy!`
    );
  }
}
theHuntingGames([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
console.log("-------------------------");
theHuntingGames([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
]);
