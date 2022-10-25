function rotateArray(arr) {
  let rotation = arr.pop();
  for (let i = 0; i < rotation; i++) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
  }
  console.log(arr.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
