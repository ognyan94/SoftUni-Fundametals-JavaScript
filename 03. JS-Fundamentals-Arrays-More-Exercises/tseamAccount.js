function tseamAccount(arr) {
  let games = arr.shift().split(" ");
  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    let [command, game] = arr.shift().split(" ");
    if (command === `Install`) {
      if (!games.includes(game)) {
        games.push(game);
      }
    } else if (command === "Uninstall") {
      if (games.includes(game)) {
        games.splice(games.indexOf(game), 1);
      }
    } else if (command === "Update") {
      if (games.includes(game)) {
        games.splice(games.indexOf(game), 1);
        games.push(game);
      }
    } else if (command === "Expansion") {
      let [exp1, exp2] = game.split("-");
      if (games.includes(exp1)) {
        games.splice(games.indexOf(exp1) + 1, 0, `${exp1}:${exp2}`);
      }
    }
  }
  console.log(games.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
