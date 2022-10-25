function integerAndFloat(first, second, third) {
  let sum = first + second + third;
    let typeOfNum = sum % 1 === 0 ? 'Integer':'Float'

  console.log(`${sum} - ${typeOfNum}`);
}
integerAndFloat(100, 200, 303);
