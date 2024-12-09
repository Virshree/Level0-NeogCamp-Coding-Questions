/**************************employee pay slip details***************** */
let hourlyRate = 500;
let hoursWorked = 40;

function calculateGrossPay(hourlyRate, hoursWorked) {
  return hourlyRate * hoursWorked;
}
let grossPay = calculateGrossPay(hourlyRate, hoursWorked);
console.log("Gross Pay :", grossPay);

console.log("------------------------------------");

let overTimeRate = 1.5;

function calculateOverTimeRate(hourlyRate, hoursWorked, overTimeRate) {
  let overtimePay = 0;
  if (hoursWorked > 40) {
    let overtimehours = hoursWorked - 40;
    overtimePay = overtimehours * hourlyRate * overTimeRate;
  }
  return overtimePay;
}

let overTimePay = calculateOverTimeRate(hourlyRate, hoursWorked, overTimeRate);

console.log("OverTimePay: " + overTimePay);

console.log("------------------------------------");

let taxRate = 0.2;
let insuranceRate = 0.1;
let retirementRate = 0.05;

function calculateDeductions(grossPay, taxRate, insuranceRate, retirementRate) {
  let taxAmount = grossPay * taxRate;
  let insuranceAmount = grossPay * insuranceRate;
  let retirementAmount = grossPay * retirementRate;

  return taxAmount + insuranceAmount + retirementAmount;
}

let deductions = calculateDeductions(
  grossPay,
  taxRate,
  insuranceRate,
  retirementRate
);

console.log("Deductions: ", deductions);
console.log("------------------------------------");

function calculateNetPay(grossPay, overTimePay, deductions) {
  return grossPay + overTimePay - deductions;
}
let netPay = calculateNetPay(grossPay, overTimePay, deductions);
console.log("NetPay: ", netPay);

console.log("------------------------------------");

let performanceScore = 7;
let bonus;
function calculateBonus(performanceScore) {
  if (performanceScore >= 8) {
    bonus = 10000;

  } else if (performanceScore >= 6) {
    bonus = 5000;
 
  } else if (performanceScore >= 4) {
    bonus = 2500;

  } else {
    bonus = 0;
    
  }
  return bonus;
}

let bonusAmount = calculateBonus(performanceScore);
console.log("Bonus Amount: ", bonusAmount);

console.log("------------------------------------");
function generatePayStub(employeeName,hourlyRate,hoursWorked,overTimePay,grossPay,deductions,bonusAmount,netPay){

    let payStub="Pay Stub for "+employeeName+"\n"+"Hourly Rate :"+hourlyRate+"\n"
    +"Hours Worked :"+hoursWorked+"\n"+"Gross Pay :"+grossPay+"\n"+"Overtime Pay :"+overTimePay
    +"\n"+"Deductions :"+deductions+"\n"+"Bonus :"+bonusAmount+"\n"+"Net pay :"+netPay

    return payStub;
}

console.log(generatePayStub("Rahul",hourlyRate,hoursWorked,overTimePay,grossPay,deductions,bonusAmount,netPay))

/*

Gross Pay : 20000
------------------------------------
OverTimePay: 0
------------------------------------
Deductions:  7000
------------------------------------
NetPay:  13000
------------------------------------
Bonus Amount:  5000
------------------------------------
Pay Stub for Rahul
Hourly Rate :500
Hours Worked :40
Gross Pay :20000
Overtime Pay :0
Deductions :7000
Bonus :5000
Net pay :13000


*/