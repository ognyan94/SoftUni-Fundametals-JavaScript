function theLift(array) {
  let people = Number(array.shift());
  let wagons = array.toString().split(" ").map(Number);
  let haveEmptySpot = false;
  for (let i = 0; i < wagons.length; i++) {
    if (people <= 0) {
      break;
    }
    if (people < 4 && wagons[i] < 4) {
      wagons[i] += people;
      people -= wagons[i];
    } else if (wagons[i] < 4) {
      people -= 4 - wagons[i];
      wagons[i] += 4 - wagons[i];
    }
  }
  for (const wagon of wagons) {
    if (wagon < 4) {
      haveEmptySpot = true;
    }
  }
  if (haveEmptySpot) {
    console.log(`The lift has empty spots!`);
    console.log(wagons.join(" "));
  } else if (people > 0){
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(wagons.join(" "));
  }else{
    console.log(wagons.join(" "));
  }
}
theLift(["0", "0 0 0 0 0"]);
console.log("-------------------");
theLift(["20", "4 4 4"]);
