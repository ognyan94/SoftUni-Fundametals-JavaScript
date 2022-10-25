function searchForANumber(arr, action) {
  let sliceNum = action[0];
  let deleteNum = action[1];
  let specNum = action[2];
  let takeNum = arr.slice(0, sliceNum);
  
  takeNum.splice(0, deleteNum);
  let count = 0;
  for (let num of takeNum) {
    if (num === specNum) {
      count++;
    }
  }
  console.log(`Number ${action[2]} occurs ${count} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
