function chessBoard(num) {
  let count = 0;
  console.log(`<div class="chessboard">`);
  while (count < num) {
    if (count % 3 === 0) {
      console.log(`<div>`);
    }
    if (count % 2 == 0) {
      if (count % 8 == 0 && count != 0) {
        console.log('<span class="black"></span>');
      } else {
        console.log('<span class="black"></span>');
      }
    } else {
      console.log('<span class="white"></span>');
    }
    if (count % 3 === 0) {
      console.log(`</div>`);
    }
    count++;
  }

  console.log();
}
chessBoard(6);
