// ## Monthly Savings Calculator

// Consider a scenario where you have two sources of income and multiple monthly expenses.
// Use the given variables and perform the following calculations:

// 1. Calculate the `totalIncome` by adding `income1` and `income2`.
// 2. Calculate the `totalExpenses` by adding `expense1`, `expense2`, `expense3`, and `expense4`.
// 3. Calculate the `balance` by subtracting `totalExpenses` from `totalIncome`.

// Given Variables:

// - `income1`: ₹50,000
// - `income2`: ₹30,000
// - `expense1`: ₹15,000
// - `expense2`: ₹10,000
// - `expense3`: ₹8,000
// - `expense4`: ₹12,000

// Monthly Income 1: ₹[income1]
// Monthly Income 2: ₹[income2]
// -----------------------
// Total Income: ₹[totalIncome]
// -----------------------
// Monthly Expense 1: ₹[expense1]
// Monthly Expense 2: ₹[expense2]
// Monthly Expense 3: ₹[expense3]
// Monthly Expense 4: ₹[expense4]
// -----------------------
// Total Expenses: ₹[totalExpenses]
// -----------------------
// Balance: ₹[balance]




let income1= 50000;

let income2=30000;

let expense1=15000;

let expense2=10000;

let expense3=8000;

let expense4=12000;


console.log("Monthly Income 1 : ₹",income1);
console.log("Monthly Income 2 : ₹",income2);
console.log("-----------------------");

let totalIncome = income1 + income2;
console.log("Total income    : ₹", totalIncome);

console.log("-----------------------");

console.log("Monthly Expense 1: ₹",expense1);
console.log("Monthly Expense 2: ₹",expense2);

console.log("Monthly Expense 3: ₹",expense3);

console.log("Monthly Expense 4: ₹",expense4);

console.log("-----------------------");

let totalExpense=expense1+expense2+expense3+expense4;

console.log("Total Expenses   :  ₹",totalExpense);

console.log("-----------------------");

let totalBalance=totalIncome-totalExpense;

console.log("Total Balance    :  ₹",totalBalance);


/*

Monthly Income 1 : ₹ 50000
Monthly Income 2 : ₹ 30000
-----------------------
Total income    : ₹ 80000
-----------------------
Monthly Expense 1: ₹ 15000
Monthly Expense 2: ₹ 10000
Monthly Expense 3: ₹ 8000
Monthly Expense 4: ₹ 12000
-----------------------
Total Expenses   :  ₹ 45000
-----------------------
Total Balance    :  ₹ 35000


*/