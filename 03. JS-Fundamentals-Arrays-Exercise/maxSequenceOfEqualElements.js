function maxSequenceOfEqualElements(arr) {
  let maxSequence = [];

  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    let currentSequence = [];
    for (let j = i; j < arrL; j++) {
      if (arr[i] === arr[j]) {
        currentSequence.push(arr[j])
      }else{
        break
      }
    }
    if(currentSequence.length > maxSequence.length){
        maxSequence = currentSequence
    }
  }
  console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([4, 4, 4, 4]);
