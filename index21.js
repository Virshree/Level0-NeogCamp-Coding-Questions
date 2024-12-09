//calorie burnt and intake

let day1Burnt = 400;
let day1Intake = 1500;

let day2Burnt = 450;
let day2Intake = 1800;

let day3Burnt = 300;
let day3Intake = 1600;

let day4Burnt = 500;
let day4Intake = 2000;

let baseCalorieBurn = 1500;

function calculateSurplusDeficit(day, dayBurnt, dayIntake, baseCalorieBurn) {
  let day1Surplus = day1Burnt - (day1Intake + baseCalorieBurn);
  let day2Surplus = day2Burnt - (day2Intake + baseCalorieBurn);
  let day3Surplus = day3Burnt - (day3Intake + baseCalorieBurn);
  let day4Surplus = day4Burnt - (day4Intake + baseCalorieBurn);

  if (
    day1Surplus > 0 &&
    day2Surplus > 0 &&
    day3Surplus > 0 &&
    day4Surplus > 0
  ) {
    console.log("Surplus ");
  } else {
    console.log("Day 1: Deficit :", day1Surplus);
    console.log("Day 1: Deficit :", day2Surplus);
    console.log("Day 1: Deficit :", day3Surplus);
    console.log("Day 1: Deficit :", day4Surplus);
  }
}
calculateSurplusDeficit("Day 1", 400, 1500, 1500);

console.log("--------------------------------------------");
let burntCalories;
function totalBurnt(burntCalories) {
  burntCalories = day1Burnt + day2Burnt + day3Burnt + day4Burnt;
  return burntCalories;
}
let totalburnt = totalBurnt(burntCalories);
console.log("Total Calories Burnt: ", totalburnt);
// Total Calories Burnt:  1650

console.log("--------------------------------------------");
let intakeCalories;
function totalIntake(intakeCalories) {
  intakeCalories = day1Intake + day2Intake + day3Intake + day4Intake;

  return intakeCalories;
}
let totalintake = totalIntake(intakeCalories);
console.log("Total calories Intake: ", totalintake);
// Total Calories Intake:  6900

console.log("--------------------------------------------");
let surplus;
function totalSurplus(surplus) {
  surplus = totalburnt - (totalintake + 4 * baseCalorieBurn);

  return surplus;
}
let surplusTotal = totalSurplus(surplus);
console.log("Total Surplus/Deficit :", surplusTotal);

console.log("--------------------------------------------");

// Total Surplus/Deficit:  -11250

let standingGoalAwards = "";
function generateWeeklySummary(
  totalburnt,
  totalintake,
  surplusTotal,
  standingGoalAwards
) {
  let weeklysummary =
    "Weekly summary :" +
    "\n" +
    "Total Calories burnt: " +
    totalburnt +
    "\n" +
    "Total Calories intake :" +
    totalintake +
    "\n" +
    "Total Surplus/Deficit: " +
    surplusTotal;

  if (totalburnt > 1000) {
    standingGoalAwards =
      "Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!";
  } else {
    standingGoalAwards = "No Award yet";
  }

  return weeklysummary + "\n" + standingGoalAwards;
}

console.log(
  generateWeeklySummary(
    totalburnt,
    totalintake,
    surplusTotal,
    standingGoalAwards
  )
);

// Day 1: Deficit : -2600
// Day 1: Deficit : -2850
// Day 1: Deficit : -2800
// Day 1: Deficit : -3000
// --------------------------------------------
// Total Calories Burnt:  1650
// --------------------------------------------
// Total calories Intake:  6900
// --------------------------------------------
// Total Surplus/Deficit : -11250
// --------------------------------------------
// Weekly summary :
// Total Calories burnt: 1650
// Total Calories intake :6900
// Total Surplus/Deficit: -11250
// Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!
