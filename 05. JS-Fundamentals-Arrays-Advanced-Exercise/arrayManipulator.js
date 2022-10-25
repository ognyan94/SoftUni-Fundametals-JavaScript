function arrayManipulator(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let commands = arr2[i].split(" ");
    let action = commands.shift();
    let firstEl = commands.shift()
    // console.log(action);
    switch (action) {
      case `add`:
        let num = commands[1];
        arr1.splice(firstEl, 0, Number(num));
        break;
      case `addMany`:
        for (let i = 0; i < commands.length; i++) {
          arr1.splice(firstEl, 0, Number(commands[i]));
        }
        break;
      case `contains`:

        break;
      case `remove`:
        break;
      case `shift`:
        break;
      case `sumPairs`:
        break;
      case `print`:
        break;
    }
  }

  console.log(arr1);
}
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
