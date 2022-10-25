function cone(radius, hight) {
  let volume = (1 / 3) * 3.1415926535898 * Math.pow(radius, 2) * hight;
  let area = 3.1415926535898 * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(hight, 2)))
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
