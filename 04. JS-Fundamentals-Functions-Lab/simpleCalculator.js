function simpleCalculator(firstNum, secNum, operator) {
  switch (operator) {
    case `multiply`:
      console.log(multiply(firstNum, secNum));
      break;
    case `divide`:
      console.log(divide(firstNum, secNum));
      break;
    case `add`:
       console.log(add(firstNum, secNum));
      break;
    case `subtract`:
       console.log(subtract(firstNum, secNum));
  }

  function multiply(first, sec) {
    return first * sec;
  }
  function divide(first, sec) {
    return first / sec;
  }
  function add(first, sec) {
    return first + sec;
  }
  function subtract(first, sec) {
    return first - sec;
  }
}
simpleCalculator(5, 5, "multiply");
