function formatGrade(grade) {
  let word = "";
  grade = grade.toFixed(2);
  if (grade < 3) {
    word = "Fail";
    grade = 2;
  } else if (grade < 3.5) {
    word = "Poor";
  } else if (grade < 4.5) {
    word = `Good`;
  } else if (grade < 5.5) {
    word = `Very good`;
  } else {
    word = `Excellent`;
  }

  console.log(`${word} (${grade})`);
}
formatGrade(2);
