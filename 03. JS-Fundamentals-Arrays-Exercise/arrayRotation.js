function arrayRotation(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    let num = arr.shift();
    arr.push(num);
  }
  console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
