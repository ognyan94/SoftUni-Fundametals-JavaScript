function commonElements(arr1, arr2) {
  for (let word of arr1) {
    for (let word2 of arr2) {
      if (word === word2) {
        console.log(word2);
      }
    }
  }
}
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
