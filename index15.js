// // Sales Performance Report

// Step 1:
let salesperson1 = "Rahul";
let salesperson2 = "Priya";
let salesperson3 = "Amit";

let rahulActualSales = 85;
let priyaActualSales = 180;
let amitActualSales = 120;

let rahulSalesTarget = 100;
let priyaSalesTarget = 200;
let amitSalesTarget = 150;

// Step 2:

let rahulSalesPercentages = (rahulActualSales / rahulSalesTarget) * 100;

let priyaSalesPercentages = (priyaActualSales / priyaSalesTarget) * 100;

let amitSalesPercentages = (amitActualSales / amitSalesTarget) * 100;

// console.log("Rahul",rahulSalesPercentage);//85
// console.log("Priya",priyaSalesPercentage);//90
// console.log("Amit",amitSalesPercentage); //80

// Step 3:

let rahulSalesPerformance = "";
if (rahulSalesPercentages >= 90) {
  rahulSalesPerformance = "High Performance";
} else if (rahulSalesPercentages >= 70) {
  rahulSalesPerformance = "Average Performance";
} else {
  rahulSalesPerformance = "Low Performance";
}

let priyaSalesPerformance = "";
if (priyaSalesPercentages >= 90) {
  priyaSalesPerformance = "High Performance";
} else if (priyaSalesPercentages >= 70) {
  priyaSalesPerformance = "Average Performance";
} else {
  priyaSalesPerformance = "Low Performance";
}

let amitSalesPerformance = "";
if (amitSalesPercentages >= 90) {
  amitSalesPerformance = "High Performance";
} else if (amitSalesPercentages >= 70) {
  amitSalesPerformance = "Average Performance";
} else {
  amitSalesPerformance = "Low Performance";
}

let rahulbonus = 0.1;
let priyabonus = 0.2;
let amitbonus = 0.1;

// Step 4:

// Calculate the bonus amount for each salesperson using the formula:
let rahulBonusAmount = rahulActualSales * rahulbonus;
let priyaBonusAmount = priyaActualSales * priyabonus;
let amitBonusAmount = amitActualSales * amitbonus;

// Step 5:

console.log("Sales Performance Report");
console.log("--------------------------------");
console.log(salesperson1);
console.log("Sales Target:", rahulSalesTarget,"units");
console.log("Units Sold:", rahulActualSales ,"units");
console.log("Sales Percentage:", rahulSalesPercentages, "%");
console.log("Performance:", rahulSalesPerformance);
console.log("Bonus:", rahulBonusAmount , "units");
console.log("\n");

console.log(salesperson2);
console.log("Sales Target:", priyaSalesTarget ,"units");
console.log("Units Sold:", priyaActualSales ,"units");
console.log("Sales Percentage:", priyaSalesPercentages,"%");
console.log("Performance:", priyaSalesPerformance);
console.log("Bonus:", priyaBonusAmount , "units");


console.log("\n");
console.log(salesperson3);
console.log("Sales Target:", amitSalesTarget ,"units");
console.log("Units Sold:", amitActualSales ,"units");
console.log("Sales Percentage:", amitSalesPercentages,"%");
console.log("Performance:", amitSalesPerformance);
console.log("Bonus:", amitBonusAmount , "units");


// Sales Performance Report
// --------------------------------
// Rahul
// Sales Target: 100 units
// Units Sold: 85 units
// Sales Percentage: 85 %
// Performance: Average Performance
// Bonus: 8.5 units


// Priya
// Sales Target: 200 units
// Units Sold: 180 units
// Sales Percentage: 90 %
// Performance: High Performance
// Bonus: 36 units


// Amit
// Sales Target: 150 units
// Units Sold: 120 units
// Sales Percentage: 80 %
// Performance: Average Performance
// Bonus: 12 units