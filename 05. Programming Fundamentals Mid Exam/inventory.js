function inventory(array) {
  let newArray = array.shift().split(", ");

  let commands = array.shift();
  while (commands !== "Craft!") {
    let line = commands.split(" - ");
    let action = line[0];
    let item = line[1];

    switch (action) {
        case "Collect": 
        if(!newArray.includes(item)){
            newArray.push(item)
        }
        break;
        case "Drop": 
        if(newArray.includes(item)){
            newArray.splice(newArray.indexOf(item),1)
        }
        break;
        case "Combine Items":
            let combineItem = item.split(":")
            let oldItem = combineItem[0]
            let newItem = combineItem[1]
            if(newArray.includes(oldItem)){
                let index = newArray.indexOf(oldItem)
                newArray.splice(index+1,0, newItem)
            }
             break;
        case "Renew": 
        if(newArray.includes(item)){
           let cutItem = newArray.splice(newArray.indexOf(item),1)
            newArray.push(cutItem.toString())
        }
        break;

    }

    commands = array.shift();
  }
  console.log(newArray.join(", "));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );
  console.log('=====================');
  inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ])
