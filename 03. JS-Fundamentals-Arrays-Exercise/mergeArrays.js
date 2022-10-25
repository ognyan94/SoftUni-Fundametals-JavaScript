function mergeArrays(arr1, arr2) {
  let input = [];

  for (let i = 0; i <= arr1.length - 1; i++) {
    if (i % 2 === 0) {
      let evenNum = Number(arr1[i]) + Number(arr2[i]);
      input.push(evenNum);
    } else {
      let oddNum = arr1[i] + arr2[i];
      input.push(oddNum);
    }
  }
  console.log(input.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
