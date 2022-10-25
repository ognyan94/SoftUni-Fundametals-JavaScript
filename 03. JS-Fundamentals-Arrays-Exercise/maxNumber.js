function maxNumber(nums) {
  let newArr = [];
  let numsL = nums.length;
  for (let i = 0; i < numsL; i++) {
    let numsI = nums[i];
    let isBiger = true;
    for (let j = i + 1; j < numsL; j++) {
      let numsJ = nums[j];
      if (numsI <= numsJ) {
        isBiger = false;
      }
    }
    if (isBiger) {
      newArr.push(numsI);
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([41, 41, 34, 20]);
