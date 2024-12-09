let employee1Name="Rahul";
let employee1Grade= 90;
let employee1HoursWorked=27;
let employee1Salary= 45000;
let employee1VacationLeaveTaken= 2;
let employee1SickLeaveTaken= 1;

console.log("Employee Name: " + employee1Name);

console.log("Grade:", employee1Grade);

console.log("Hours worked:", employee1HoursWorked);

console.log("Salary:", employee1Salary);
//calculate bouns
let employee1Bonus;

if(employee1HoursWorked>30 && employee1Grade>75) {
    employee1Bonus = 0.2;
    console.log("Bonus:",employee1Bonus);
}
else if(employee1HoursWorked>25 && employee1Grade>95){
    employee1Bonus = 0.15;
    console.log("Bonus:",employee1Bonus);
}
else if(employee1HoursWorked>25 && employee1Grade>85){
    employee1Bonus = 0.1;
    console.log("Bonus:",employee1Bonus);
}

//employee pf deduction

let employee1PFDeductions;

if(employee1Salary>35000){
    employee1PFDeductions=(employee1Salary/100)*12.5;
    console.log("PF Deductions:",employee1PFDeductions);
}
else{
    console.log("PF Deductions: 2500");
}

//tds deductions
let employee1TDSDeduction;

if(employee1Salary > 40000){

    employee1TDSDeduction=(employee1Salary/100)*10;

    console.log("TDS Deduction :",employee1TDSDeduction);
}
else{
    console.log("TDS Deduction: 199");

}

//sick leave and vacation deduction
let employee1VacationDeduction=(employee1VacationLeaveTaken*45000)/30;

console.log("Vacation deductions :",employee1VacationDeduction);

let employee1SickDeduction=(employee1SickLeaveTaken*45000)/30;

console.log("Sick Deduction :",employee1SickDeduction);


let employee1NetSalary=
employee1Salary+employee1Salary *employee1Bonus-employee1PFDeductions-employee1TDSDeduction-employee1VacationDeduction-employee1SickDeduction;

console.log("Net salary: " ,employee1NetSalary);


// Employee Name: Rahul
// Grade: 90
// Hours worked: 27
// Salary: 45000
// Bonus: 0.1
// PF Deductions: 5625
// TDS Deduction : 4500
// Vacation deductions : 3000
// Sick Deduction : 1500
// Net salary:  34875