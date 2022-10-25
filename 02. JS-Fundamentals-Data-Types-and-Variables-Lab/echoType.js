function echoType(text) {
  let typeOfText = typeof text;

  console.log(typeOfText);
  if (typeOfText === "string" || typeOfText === "number") {
    console.log(text);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}
echoType(null);
