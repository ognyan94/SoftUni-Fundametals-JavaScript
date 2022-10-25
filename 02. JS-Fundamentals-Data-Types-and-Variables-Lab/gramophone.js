function gramophone(bandName, albumName, songName) {
  let timeRotate =
    (albumName.length * bandName.length * songName.length) / 2 / 2.5;

  console.log(`The plate was rotated ${Math.ceil(timeRotate)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
