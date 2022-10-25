function distanceBetweenPoints(x1, y1, x2, y2) {
  let x = Math.abs(x2 - x1);
  let y = Math.abs(y1 - y2);

  let point = Math.sqrt(x * x + y * y);
  console.log(point);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
