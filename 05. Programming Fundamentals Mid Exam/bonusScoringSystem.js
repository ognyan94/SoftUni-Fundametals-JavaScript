function bonusScoringSystem(array) {
  let students = Number(array.shift());
  let numLectures = Number(array.shift());
  let bonus = Number(array.shift());

  let maxBonus = 0;
  let maxVisits = 0;
  for (let i = 0; i < students; i++) {
    let countVisit = Number(array[i]);
    let bonusForStudent = (countVisit / numLectures) * (5 + bonus);
    if (bonusForStudent >= maxBonus) {
      maxBonus = bonusForStudent;
      maxVisits = array[i];
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxVisits} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
