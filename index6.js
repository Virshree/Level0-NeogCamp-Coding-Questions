// ## Kirana Store Income Statement

// Consider the income and expenses of a kirana store. Perform the following calculations
// and generate the income statement:

// 1. Calculate the `totalSales` by adding the values of `sales1`, `sales2`, `sales3`, and 
//`sales4`.
// 2. Calculate the `totalExpenses` by adding the values of `rentExpense`, `salaryExpense`, 
//`inventoryExpense`, and `utilityExpense`.

// 3. Calculate the `netIncome` by subtracting the `totalExpenses` from the `totalSales`.

// Given Variables:


// Kirana Store Income Statement
// -----------------------------
// Total Sales: [totalSales]
// -----------------------------
// Rent Expense: 25,000
// Salary Expense: 18,000
// Inventory Expense: 12,000
// Utility Expense: 15,000
// -----------------------------
// Total Expenses: [totalExpenses]
// -----------------------------
// Net Income: [netIncome]


let sales1=50000;
let sales2=60000;
let sales3=45000;
let sales4=55000;

let rentExpense=25000;
let salaryExpense=18000;
let inventoryExpense=12000;
let utilityExpense=15000;

let totalSales=sales1+sales2+sales3+sales4;

console.log("Kirana Store Income Statement");

console.log("-----------------------------");

console.log("Total Sales  ",totalSales);

console.log("-----------------------------");

console.log(" Rent Expense: ",rentExpense);
console.log("Salary Expense: ",salaryExpense);
console.log("inventoryExpense: ",inventoryExpense);
console.log("utilityExpense: ",utilityExpense);

console.log("-----------------------------");


let totalExpenses = rentExpense+salaryExpense+utilityExpense+inventoryExpense;

console.log("TotalExpenses: ",totalExpenses);

console.log("-----------------------------");

let netIncome = totalSales-totalExpenses;
console.log("NetIncome: ",netIncome);

/*
Kirana Store Income Statement
-----------------------------
Total Sales   210000
-----------------------------
 Rent Expense:  25000
Salary Expense:  18000
inventoryExpense:  12000
utilityExpense:  15000
-----------------------------
TotalExpenses:  70000
-----------------------------
NetIncome:  140000


*/