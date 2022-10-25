function train(array) {
  let wagons = array.shift().split(" ");
  let maxCapacity = array.shift();

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");

    if (command[0] === "Add") {
      wagons.push(command[1]);
    } else {
      for (let j = 0; j < wagons.length; j++) {
        
        let passengers = Number(command[0]);
        let passengersInWagon = Number(wagons[j]);

        if (passengersInWagon + passengers <= Number(maxCapacity)) {
            wagons.splice(wagons.indexOf(wagons[j]),1,passengersInWagon + passengers);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
