function charactersInRange(startChar, endChar) {
  let start = Math.min (startChar.charCodeAt(),endChar.charCodeAt());
  let end = Math.max(startChar.charCodeAt(),endChar.charCodeAt());
  let charArr = [];
  for (let i = start + 1; i < end; i++) {
    let char = String.fromCharCode(i);
    charArr.push(char);
  }
  console.log(charArr.join(" "));
}
charactersInRange("C", "#");
