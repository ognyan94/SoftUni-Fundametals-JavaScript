function softUniReception(array) {
  let firstEmployee = Number(array.shift());
  let secEmployee = Number(array.shift());
  let thirdEmployee = Number(array.shift());
  let numStudents = Number(array);

  let counterHours = 0;
  let sumStud = 0;
  while (sumStud < numStudents) {
    counterHours++;
    if (counterHours % 4 === 0) {

    } else {
      let studentsPerHours = firstEmployee + secEmployee + thirdEmployee;
      sumStud += studentsPerHours;
    }
  }
  console.log(`Time needed: ${counterHours}h.`);
}
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
