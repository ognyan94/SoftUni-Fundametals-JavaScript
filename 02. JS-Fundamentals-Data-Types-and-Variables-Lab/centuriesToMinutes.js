function centuriesToMinutes(centuries) {
  let years = centuries * 100;
  let days = years * 365.24;
  let hours = days * 24;
  let minutes = hours * 60;

  console.log(
    `${centuries} centuries = ${years} years = ${Math.trunc(
      days
    )} days = ${hours} hours = ${Math.trunc(minutes)} minutes`
  );
}
centuriesToMinutes(1);
console.log("---------------------------------------------");
console.log(
  "1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes"
);
