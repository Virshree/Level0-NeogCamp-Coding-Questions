// quarterly savings report

let goalAmount = 12000;

let currentSavingsMonth1 = 3000;
let currentSavingsMonth2 = 5000;
let currentSavingsMonth3 = 8000;

let savingsContributionsMonth1 = 1000;
let savingsContributionsMonth2 = 1500;
let savingsContributionsMonth3 = 2000;

let totalCurrentSavings =
  currentSavingsMonth1 + currentSavingsMonth2 + currentSavingsMonth3;

let totalSavingsContributions =
  savingsContributionsMonth1 +
  savingsContributionsMonth2 +
  savingsContributionsMonth3;

let quarterlyGoalAmount = goalAmount / 4;

let percentageAchieved = (totalCurrentSavings / quarterlyGoalAmount) * 100;

console.log("------------------------------------");
console.log("Quarterly Savings Report");

console.log("------------------------------------");

console.log("Goal Amount:$", goalAmount);
console.log("Quarterly Goal Amount:$", quarterlyGoalAmount);
console.log("Total Current Savings:$", totalCurrentSavings);
console.log("Total Savings Contribution:$", totalSavingsContributions);

console.log("Percentage Archived:$ ", percentageAchieved + "%");

if (percentageAchieved >= 100) {
  let projectedTimeline =
    "Congratulations! You have already achieved your quarterly savings goal !";
  console.log("Projected Timeline", projectedTimeline);
} else if (percentageAchieved >= 75) {
  let projectedTimeline =
    "At your current savings rate, you are on track to reach your quarterly goal by the end of the quarter";
  console.log("Projected Timeline", projectedTimeline);
} else {
  console.log(
    "Based on your current savings rate, it may take some additional time to reach your quarterly goal. Consider increasing your savings contributions."
  );
}

if (percentageAchieved >= 80) {
  let savingsTips =
    "Great job! You are making excellent progress towards your quarterly goal. Keep up the good work!";
  console.log("Savings Tips: ", savingsTips);
} else if (percentageAchieved >= 50) {
  let savingsTips =
    "You are halfway there! Try to find additional ways to save money and increase your savings rate.";
  console.log("Savings Tips: ", savingsTips);
} else {
  console.log(
    "To reach your quarterly savings goal sooner, consider cutting back on non-essential expenses and finding opportunities to save more"
  );
}

// ------------------------------------
// Quarterly Savings Report
// ------------------------------------
// Goal Amount:$ 12000
// Quarterly Goal Amount:$ 3000
// Total Current Savings:$ 16000
// Total Savings Contribution:$ 4500
// Percentage Archived:$  533.3333333333333%
// Projected Timeline Congratulations! You have already achieved your quarterly savings goal !
// Savings Tips:  Great job! You are making excellent progress towards your quarterly goal. Keep up the good work!
