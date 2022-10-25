function triplesOfLatinLetters(num) {
  for (let i = 0; i < num; i++) {
    let lettersI = String.fromCharCode(97 + i);
    for (let j = 0; j < num; j++) {
      let lettersJ = String.fromCharCode(97 + j);
      for (let k = 0; k < num; k++) {
        let lettersK = String.fromCharCode(97 + k);
        console.log(`${lettersI}${lettersJ}${lettersK}`);
      }
    }
  }
}
triplesOfLatinLetters("3");
