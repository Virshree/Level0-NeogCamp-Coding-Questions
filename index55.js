// A5_Exercise_2

//1.1

let departmentDetails = [
  {
    name: "Rajesh Kumar",
    department: "Marketing",
    hourlySalary: 250,
    week1Hours: 40,
    week2Hours: 42,
    week3Hours: 38,
    week4Hours: 39,
    bonusMultiplier: 65 / 100,
  },
  {
    name: "Priya Gupta",
    department: "Sales",
    hourlySalary: 220,
    week1Hours: 38,
    week2Hours: 40,
    week3Hours: 37,
    week4Hours: 41,
    bonusMultiplier: 50 / 100,
  },
  {
    name: "Aniket Sharma",
    department: "Finance",
    hourlySalary: 280,
    week1Hours: 35,
    week2Hours: 36,
    week3Hours: 39,
    week4Hours: 38,
    bonusMultiplier: 80 / 100,
  },
  {
    name: "Ritu Singh",
    department: "Operations",
    hourlySalary: 300,
    week1Hours: 42,
    week2Hours: 41,
    week3Hours: 43,
    week4Hours: 40,
    bonusMultiplier: 45 / 100,
  },
  {
    name: "Rahul Verma",
    department: "IT",
    hourlySalary: 260,
    week1Hours: 37,
    week2Hours: 39,
    week3Hours: 38,
    week4Hours: 36,
    bonusMultiplier: 70 / 100,
  },
];

// console.log(departmentDetails);

/*

[
  {
    name: 'Rajesh Kumar',
    department: 'Marketing',
    hourlySalary: 250,
    week1Hours: 40,
    week2Hours: 42,
    week3Hours: 38,
    week4Hours: 39,
    bonusMultiplier: 0.65
  },
  {
    name: 'Priya Gupta',
    department: 'Sales',
    hourlySalary: 220,
    week1Hours: 38,
    week2Hours: 40,
    week3Hours: 37,
    week4Hours: 41,
    bonusMultiplier: 0.5
  },
  {
    name: 'Aniket Sharma',
    department: 'Finance',
    hourlySalary: 280,
    week1Hours: 35,
    week2Hours: 36,
    week3Hours: 39,
    week4Hours: 38,
    bonusMultiplier: 0.8
  },
  {
    name: 'Ritu Singh',
    department: 'Operations',
    hourlySalary: 300,
    week1Hours: 42,
    week2Hours: 41,
    week3Hours: 43,
    week4Hours: 40,
    bonusMultiplier: 0.45
  },
  {
    name: 'Rahul Verma',
    department: 'IT',
    hourlySalary: 260,
    week1Hours: 37,
    week2Hours: 39,
    week3Hours: 38,
    week4Hours: 36,
    bonusMultiplier: 0.7
  }
]

//1.2

 calculate totalSalaryForFourWeeks and bonus (if 40 hours spent per week 
  for 4 weeks) for every employee. Add these two fields to every object in 
  the array
  and print the entire array to console.

*/

//calculate bonus first and then totalSalaryForFourWeeks.

for (let i = 0; i < departmentDetails.length; i++) {
  let bonusThreshold = 160;
  let bonusHours = 0;
  let totalSalary;
  let totalHours = 0;

  //calculate totalHours for 4 weeks for each employee..
  totalHours =
    departmentDetails[i].week1Hours +
    departmentDetails[i].week2Hours +
    departmentDetails[i].week3Hours +
    departmentDetails[i].week4Hours +
    totalHours;

  //calculate totalSalary for each employee for 4 week.

  totalSalary = totalHours * departmentDetails[i].hourlySalary;
  departmentDetails[i].totalSalaryForFourWeeks = totalSalary;

  if (totalHours > bonusThreshold) {
    bonusHours = totalHours - bonusThreshold;
    bonusHours =
      bonusHours *
      departmentDetails[i].hourlySalary *
      departmentDetails[i].bonusMultiplier;

    departmentDetails[i].bonus = bonusHours;
  } else {
    departmentDetails[i].bonus = bonusHours;

    bonusHours = 0;
  }
}

// console.log("Bonus with total salary for 4 weeks: ",departmentDetails)

/*

Bonus with total salary for 4 weeks:  [
  {
    name: 'Rajesh Kumar',
    department: 'Marketing',
    hourlySalary: 250,
    week1Hours: 40,
    week2Hours: 42,
    week3Hours: 38,
    week4Hours: 39,
    bonusMultiplier: 0.65,
    totalSalaryForFourWeeks: 39750,
    bonus: 0
  },
  {
    name: 'Priya Gupta',
    department: 'Sales',
    hourlySalary: 220,
    week1Hours: 38,
    week2Hours: 40,
    week3Hours: 37,
    week4Hours: 41,
    bonusMultiplier: 0.5,
    totalSalaryForFourWeeks: 34320,
    bonus: 0
  },
  {
    name: 'Aniket Sharma',
    department: 'Finance',
    hourlySalary: 280,
    week1Hours: 35,
    week2Hours: 36,
    week3Hours: 39,
    week4Hours: 38,
    bonusMultiplier: 0.8,
    totalSalaryForFourWeeks: 41440,
    bonus: 0
  },
  {
    name: 'Ritu Singh',
    department: 'Operations',
    hourlySalary: 300,
    week1Hours: 42,
    week2Hours: 41,
    week3Hours: 43,
    week4Hours: 40,
    bonusMultiplier: 0.45,
    totalSalaryForFourWeeks: 49800,
    bonus: 810
  },
  {
    name: 'Rahul Verma',
    department: 'IT',
    hourlySalary: 260,
    week1Hours: 37,
    week2Hours: 39,
    week3Hours: 38,
    week4Hours: 36,
    bonusMultiplier: 0.7,
    totalSalaryForFourWeeks: 39000,
    bonus: 0
  }
]


*/

//1.3

/*
Generate and print employee payslip for every employee. Print their name, 
department,total hours worked, total salary and bonus.
*/

function getTotalHoursWorkedWeekly() {

  for (let i = 0; i < departmentDetails.length; i++) {
    let totalhoursWeekly = 0;



    totalhoursWeekly=
    
      departmentDetails[i].week1Hours +
      departmentDetails[i].week2Hours +
      departmentDetails[i].week3Hours +
      departmentDetails[i].week4Hours  +totalhoursWeekly;

      departmentDetails[i].totalhoursWeekly=totalhoursWeekly;


      // console.log(totalhoursWeekly);


  }

// return totalhoursWeekly;
}
//employee payslip

function generateEmployeePaySlip(departmentDetails) {
  let employeeReport = "===== Employee Payslip =====  \n";
  let totalHoursWorked = getTotalHoursWorkedWeekly(departmentDetails);

  for (let i = 0; i < departmentDetails.length; i++) {
    employeeReport += "Name: " + departmentDetails[i].name + "\n";
    employeeReport += "Department: " + departmentDetails[i].department + "\n";
    employeeReport +=
      "Total Hours Worked: " + (departmentDetails[i].totalhoursWeekly)+ "\n";
    employeeReport +=
      "Total Salary: " + departmentDetails[i].totalSalaryForFourWeeks + "\n";
    employeeReport += "Bonus: " + departmentDetails[i].bonus + "\n";
    employeeReport += "-------------\n";
  }
  return employeeReport;
}

console.log(generateEmployeePaySlip(departmentDetails))

/*

===== Employee Payslip =====  
Name: Rajesh Kumar
Department: Marketing
Total Hours Worked: 159
Total Salary: 39750
Bonus: 0
-------------
Name: Priya Gupta
Department: Sales
Total Hours Worked: 156
Total Salary: 34320
Bonus: 0
-------------
Name: Aniket Sharma
Department: Finance
Total Hours Worked: 148
Total Salary: 41440
Bonus: 0
-------------
Name: Ritu Singh
Department: Operations
Total Hours Worked: 166
Total Salary: 49800
Bonus: 810
-------------
Name: Rahul Verma
Department: IT
Total Hours Worked: 150
Total Salary: 39000
Bonus: 0
-------------
*/

//1.4

//Human Resource Report -(most paid employee,company averages)

function getPaidEmployee(data){
  //most paid employee-highest salary

  let highestSalary=data[0];
  for(let i=1;i<data.length;i++){
    if(data[i].totalSalaryForFourWeeks>highestSalary.totalSalaryForFourWeeks){
      highestSalary=data[i];
    }
  }
  return highestSalary;
}

function getTotalHoursWorked(){
  let totalhoursWorked=0;

  for(let i=0;i<departmentDetails.length;i++){

    totalhoursWorked=departmentDetails[i].totalhoursWeekly+totalhoursWorked;
    // console.log(totalhoursWorked);

  }
  return totalhoursWorked;
}

function getTotalAvgHoursOfCompany(){

    let totalAvg=0;

    for(let i=0;i<departmentDetails.length;i++){
      totalAvg=totalAvg+departmentDetails[i].totalhoursWeekly;
      // console.log(totalAvg);
    }
    return totalAvg/departmentDetails.length;;
}

function calculateTotalAvgof4Weeks(data,weekly){
  let totalAvgWeeks=0;
  for(let i=0;i<data.length;i++){
      totalAvgWeeks=totalAvgWeeks+data[i][weekly];
  }
  return totalAvgWeeks/data.length;
}

function genearateHumanResourceReport(departmentDetails){

  let report="====== Human Resource Report ===== \n ";
  let mostPaidEmployee=getPaidEmployee(departmentDetails);

  let averageWeek1=calculateTotalAvgof4Weeks(departmentDetails,"week1Hours")
  let averageWeek2=calculateTotalAvgof4Weeks(departmentDetails,"week2Hours")
  let averageWeek3=calculateTotalAvgof4Weeks(departmentDetails,"week3Hours")
  let averageWeek4=calculateTotalAvgof4Weeks(departmentDetails,"week4Hours")

  report+="---------\n";
  report+="Most Paid Employee \n";
  report+="---------\n";
  report+="Name: " +mostPaidEmployee.name+ "\n";
  report+="Department: "+mostPaidEmployee.department +"\n";
  report+="Total hours Worked: " +mostPaidEmployee.totalhoursWeekly+"\n";
  report+="Total Salary: " +mostPaidEmployee.totalSalaryForFourWeeks +"\n";
  report+="---------\n";
  report+="Company Averages \n";
  report+="---------\n";
  report+="Total Hours worked by All:  " +getTotalHoursWorked(departmentDetails.totalhoursWorked)+ "\n";
  report+="Total Average hours of Company: "+getTotalAvgHoursOfCompany(departmentDetails.totalAvg)+"\n";
  report+="---------\n";

  report+="Total Average of Week One: "+averageWeek1 +"\n";
  report+="Total Average of Week Two: "+averageWeek2 +"\n"; 
  report+="Total Average of Week Three: "+averageWeek3 +"\n"; 
  report+="Total Average of Week Four: "+averageWeek4 +"\n"; 


  return report;  
}
console.log(genearateHumanResourceReport(departmentDetails));

/*
====== Human Resource Report ===== 
 ---------
Most Paid Employee 
---------
Name: Ritu Singh
Department: Operations
Total hours Worked: 166
Total Salary: 49800
---------
Company Averages 
---------
Total Hours worked by All:  779
Total Average hours of Company: 155.8
---------
Total Average of Week One: 38.4
Total Average of Week Two: 39.6
Total Average of Week Three: 39
Total Average of Week Four: 38.8
*/