function loadingBar(percent) {
  let percentRep = "%".repeat(percent / 10);
  let dotRep = ".".repeat(10 - percent / 10);

  if (percent === 100) {
    console.log(`100% Complete!`);
    console.log(`[${percentRep}${dotRep}]`);
  } else {
    console.log(`${percent}% [${percentRep}${dotRep}]`);
    console.log("Still loading...");
  }
}
loadingBar(100);
