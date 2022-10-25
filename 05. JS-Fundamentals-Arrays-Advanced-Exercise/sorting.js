function sorting(arr) {
  let newArr = [];
  let sortedArr = arr.sort((a, b) => a - b);

  while (sortedArr.length > 0) {

    for (const num of sortedArr) {

      let bigNum = sortedArr.pop();
      newArr.push(bigNum);
      let smallNum = sortedArr.shift();
      newArr.push(smallNum);
      
    }
  }
  console.log(newArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
