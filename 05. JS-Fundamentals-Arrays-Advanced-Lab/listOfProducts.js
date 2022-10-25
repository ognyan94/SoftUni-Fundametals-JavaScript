function listOfProducts(arr) {
  let sortList = arr.sort();

  for (let i = 0; i < sortList.length; i++) {
    console.log(`${i + 1}.${sortList[i]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
