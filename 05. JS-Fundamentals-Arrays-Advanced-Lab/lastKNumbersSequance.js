function lastKNumbersSequance(n, k) {
  let newArr = [1];

  for (let i = 1; i < n; i++) {
    let index = Math.max(newArr.length - k, 0);
    let sum = 0;
    let elements = newArr.slice(index);
    for (let el of elements) {
      sum += el;
    }
    newArr.push(sum);
  }
  console.log(newArr.join(" "));
}
lastKNumbersSequance(6, 3);
