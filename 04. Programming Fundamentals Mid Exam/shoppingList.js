function shoppingList(array) {
  let shopList = array.shift().split("!");

  let commands = array.shift();

  while (commands !== "Go Shopping!") {
    let [action, item1, item2] = commands.split(" ");

    switch (action) {
      case "Urgent":
        if (!shopList.includes(item1)) {
          shopList.unshift(item1);
        }
        break;
      case "Unnecessary":
        if (shopList.includes(item1)) {
          shopList.splice(shopList.indexOf(item1), 1);
        }
        break;
      case "Correct":
        if (shopList.includes(item1)) {
          shopList.splice(shopList.indexOf(item1), 1, item2);
        }
        break;
      case "Rearrange":
        if (shopList.includes(item1)) {
          shopList.splice(shopList.indexOf(item1), 1);
          shopList.push(item1);
        }
        break;
    }
    commands = array.shift();
  }
  console.log(shopList.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
