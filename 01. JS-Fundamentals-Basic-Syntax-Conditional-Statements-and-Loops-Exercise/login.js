function login(input) {
  let name = input.shift();
  let reverseName = name.split("").reverse().join("");
  let counter = 0;
  for (let i of input) {
    if (reverseName === i) {
      console.log(`User ${name} logged in.`);
    } else {
      counter++;
      if (counter === 4) {
        console.log(`User ${name} blocked!`);
        break;
      } else {
        console.log(`Incorrect password. Try again.`);
      }
    }
  }
}
login(['momo','omom']);
