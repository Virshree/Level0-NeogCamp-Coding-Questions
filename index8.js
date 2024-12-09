// You have been given the following information about four contractors: Rajesh, Priya, Amit 
//and Ananya. Each contractor has a different job description, hourly rate, hours worked, and
// ratings. Your task is to calculate and display the payment details for each contractor based 
//on the provided information.

// Variables:

// 1. `contractor1` - Represents the name of contractor 1 (Rajesh).
// 2. `contractor2` - Represents the name of contractor 2 (Priya).
// 3. `contractor3` - Represents the name of contractor 3 (Amit).
// 4. `contractor4` - Represents the name of contractor 4 (Ananya).

// Job Descriptions:

// 1. `jobDescription1` - Represents the job description of contractor 1 (Web Developer).
// 2. `jobDescription2` - Represents the job description of contractor 2 (Content Writer).
// 3. `jobDescription3` - Represents the job description of contractor 3 (Graphic Designer).
// 4. `jobDescription4` - Represents the job description of contractor 4 (Digital Marketer).

// Hourly Rates:

// 1. `hourlyRate1` - Represents the hourly rate of contractor 1 (300).
// 2. `hourlyRate2` - Represents the hourly rate of contractor 2 (250).
// 3. `hourlyRate3` - Represents the hourly rate of contractor 3 (350).
// 4. `hourlyRate4` - Represents the hourly rate of contractor 4 (200).

// Hours Worked:

// 1. `hoursWorked1` - Represents the number of hours worked by contractor 1 (80).
// 2. `hoursWorked2` - Represents the number of hours worked by contractor 2 (60).
// 3. `hoursWorked3` - Represents the number of hours worked by contractor 3 (40).
// 4. `hoursWorked4` - Represents the number of hours worked by contractor 4 (20).

// Ratings:

// 1. `ratings1` - Represents the ratings of contractor 1 (90).
// 2. `ratings2` - Represents the ratings of contractor 2 (80).
// 3. `ratings3` - Represents the ratings of contractor 3 (92).
// 4. `ratings4` - Represents the ratings of contractor 4 (88).'

// Eligibility for Goodie Bag:

// 1. `isEligibleForGoodieBag1` - Represents the eligibility for a goodie bag for contractor 1. 
// (True if hours worked are greater than 15 OR ratings are greater than 85, False otherwise)
// 2. `isEligibleForGoodieBag2` - Represents the eligibility for a goodie bag for contractor 2. 
// (True if hours worked are greater than 15 OR ratings are greater than 85, False otherwise)
// 3. `isEligibleForGoodieBag3` - Represents the eligibility for a goodie bag for contractor 3. 
// (True if hours worked are greater than 15 OR ratings are greater than 85, False otherwise)
// 4. `isEligibleForGoodieBag4` - Represents the eligibility for a goodie bag for contractor 4. 
// (True if hours worked are greater than 15 OR ratings are greater than 85, False otherwise)

// Sub-Exercises:

// 1. Calculate the total payment for each contractor by multiplying the hourly rate with the 
//hours worked.
// 2. Determine if each contractor is eligible for a goodie bag based on the eligibility criteria:
//     - If the hours worked are greater than 15 OR the ratings are greater than 85, the contractor
// is eligible for a goodie bag.


// Payment Chart:
// --------------------
// Contractor: [Contractor Name]
// Job Description: [Job Description]
// Hourly Rate: [Hourly Rate]
// Hours Worked: [Hours Worked]
// Total Payment: [Total Payment]
// Ratings: [Ratings]
// Is Eligible for Goodie Bag: [true/false]

let contractor1= 'Rajesh';
let contractor2 = 'Priya';
let contractor3= 'Amit';
let contractor4 ='Ananya';


let jobDescription1 = 'Web Developer';
let jobDescription2='Content Writer';
let jobDescription3 ='Graphic Designer';
let jobDescription4='Digital Marketer';

let hourlyRate1 =300;
let hourlyRate2=250;
let hourlyRate3=350;
let hourlyRate4=200;

let hoursWorked1=80;
let hoursWorked2=60;
let hoursWorked3= 40;
let hoursWorked4= 20;


let ratings1=90;
let ratings2=80;
let ratings3=92;
let ratings4=88;


let totalPayment1=hourlyRate1*hoursWorked1;
let totalPayment2=hourlyRate2*hoursWorked2;

let totalPayment3=hourlyRate3*hoursWorked3;

let totalPayment4=hourlyRate4*hoursWorked4;


let isEligibleForGoodieBag1=(hoursWorked1>15) || (ratings1>85)

let isEligibleForGoodieBag2=(hoursWorked2>15) || (ratings2>85)

let isEligibleForGoodieBag3=(hoursWorked3>15) || (ratings3>85)

let isEligibleForGoodieBag4=(hoursWorked4>15) || (ratings4>85)

console.log("Payment Chart:");
console.log("-----------------------------------");
console.log("Contractor: ",contractor1);
console.log("Job Description: ",jobDescription1);
console.log("Hourly Rate",hourlyRate1);
console.log("Hours Worked:",hoursWorked1);
console.log("Total Payment: ",totalPayment1);
console.log("Ratings",ratings1);
console.log("Is Eligible for Goodie Bag:",isEligibleForGoodieBag1);

console.log("-----------------------------------");
console.log("Contractor: ",contractor2);
console.log("Job Description: ",jobDescription2);
console.log("Hourly Rate",hourlyRate2);
console.log("Hours Worked:",hoursWorked2);
console.log("Total Payment: ",totalPayment2);
console.log("Ratings",ratings2);
console.log("Is Eligible for Goodie Bag:",isEligibleForGoodieBag2);

console.log("-----------------------------------");
console.log("Contractor: ",contractor3);
console.log("Job Description: ",jobDescription3);
console.log("Hourly Rate",hourlyRate3);
console.log("Hours Worked:",hoursWorked3);
console.log("Total Payment: ",totalPayment3);
console.log("Ratings",ratings3);
console.log("Is Eligible for Goodie Bag:",isEligibleForGoodieBag3);

console.log("-----------------------------------");
console.log("Contractor: ",contractor4);
console.log("Job Description: ",jobDescription4);
console.log("Hourly Rate",hourlyRate4);
console.log("Hours Worked:",hoursWorked4);
console.log("Total Payment: ",totalPayment4);
console.log("Ratings",ratings4);
console.log("Is Eligible for Goodie Bag:",isEligibleForGoodieBag4);

/*

Payment Chart:
-----------------------------------
Contractor:  Rajesh
Job Description:  Web Developer
Hourly Rate 300
Hours Worked: 80
Total Payment:  24000
Ratings 90
Is Eligible for Goodie Bag: true
-----------------------------------
Contractor:  Priya
Job Description:  Content Writer
Hourly Rate 250
Hours Worked: 60
Total Payment:  15000
Ratings 80
Is Eligible for Goodie Bag: true
-----------------------------------
Contractor:  Amit
Job Description:  Graphic Designer
Hourly Rate 350
Hours Worked: 40
Total Payment:  14000
Ratings 92
Is Eligible for Goodie Bag: true
-----------------------------------
Contractor:  Ananya
Job Description:  Digital Marketer
Hourly Rate 200
Hours Worked: 20
Total Payment:  4000
Ratings 88
Is Eligible for Goodie Bag: true


*/