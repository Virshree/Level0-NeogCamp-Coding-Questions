// In this exercise, you will compare the performance of two Indian athletes, Akshay and Ravi, in the 100m sprint event.

// 1. Declare two variables, `akshayTime` and `raviTime`, and assign them the time values (in seconds) for the 100m sprint.
//     - `akshayTime`: 10.75
//     - `raviTime`: 10.92
// 2. Use the less than (<) operator to compare the times of Akshay and Ravi.
// 3. Assign the result to a variable named `isAkshayFaster`.
// 4. Write a console.log() statement to print the result. Use the following format: "Is Akshay faster than Ravi in the 100m sprint? {result}"


let akshayTime=10.75;
let raviTime=10.92;

let isAkshayFaster=akshayTime<raviTime;

console.log("Is Akshay faster than Ravi in the 100m sprint? ", isAkshayFaster);

// Is Akshay faster than Ravi in the 100m sprint?  true

//************************************************************** */

// In this exercise, you will compare the performance of two Indian athletes, Akshay and Ravi, in the 400m race.

// 1. Declare two variables, `akshayTime400` and `raviTime400`, and assign them the time values (in seconds) for the 400m race.
//     - `akshayTime400`: 46.21
//     - `raviTime400`: 47.05
// 2. Use the less than (<) operator to compare the times of Akshay and Ravi.
// 3. Assign the result to a variable named `isAkshayFaster400`.
// 4. Write a console.log() statement to print the result. Use the following format: "Is Akshay faster than Ravi in the 400m race? {result}"



let akshayTime400=46.21;
let raviTime400=47.05;


let isAkshayFaster400=akshayTime400<raviTime400;


 console.log("Is Akshay faster than Ravi in the 400m race?",isAkshayFaster400);

//  Is Akshay faster than Ravi in the 400m race? true

//************************************************************** */

// In this exercise, you will compare the performance of two Indian athletes, Akshay and Ravi, in the long jump event.

// 1. Declare two variables, `akshayDistance` and `raviDistance`, and assign them the distance values (in meters) for the long jump.
//     - `akshayDistance`: 7.83
//     - `raviDistance`: 7.68
// 2. Use the greater than (>) operator to compare the distances of Akshay and Ravi.
// 3. Assign the result to a variable named `isAkshayLongerJump`.
// 4. Write a console.log() statement to print the result. Use the following format: "Did Akshay make a longer jump than Ravi? {result}"


let akshayDistance =7.83;
let raviDistance=7.68;


let isAkshayLongerJump = akshayDistance>raviDistance
console.log("Did Akshay make a longer jump than Ravi?",isAkshayLongerJump); 

// Did Akshay make a longer jump than Ravi? true

//************************************************************** */

// In this exercise, you will compare the performance of two Indian athletes, Akshay and Ravi, in the shot put event.

// 1. Declare two variables, `akshayDistanceShotPut` and `raviDistanceShotPut`, and assign them the distance values (in meters) for the shot put.
//     - `akshayDistanceShotPut`: 19.75
//     - `raviDistanceShotPut`: 18.92
// 2. Use the greater than (>) operator to compare the distances of Akshay and Ravi.
// 3. Assign the result to a variable named `isAkshayLongerThrow`.
// 4. Write a console.log() statement to print the result. Use the following format: "Did Akshay make a longer throw than Ravi? {result}"


let akshayDistanceShotPut=19.75;
let raviDistanceShotPut=18.92;

let isAkshayLongerThrow=akshayDistanceShotPut>raviDistanceShotPut;

console.log("Did Akshay make a longer throw than Ravi",isAkshayLongerThrow); 

// Did Akshay make a longer throw than Ravi true

//************************************************************** */


// In this exercise, you will compare the performance of two Indian athletes, Akshay and Ravi, in the high jump event.

// 1. Declare two variables, `akshayHeight` and `raviHeight`, and assign them the height values (in meters) for the high jump.
//     - `akshayHeight`: 2.05
//     - `raviHeight`: 1.98
// 2. Use the greater than (>) operator to compare the heights of Akshay and Ravi.
// 3. Assign the result to a variable named `isAkshayHigherJump`.
// 4. Write a console.log() statement to print the result. Use the following format: "Did Akshay jump higher than Ravi? {result}"



let akshayHeight =2.05;
let raviHeight=1.98;

let isAkshayHigherJump = akshayHeight > raviHeight;

 console.log("Did Akshay jump higher than Ravi ?" ,isAkshayHigherJump);//true

//  Did Akshay jump higher than Ravi ? true

 //************************************************************** */


// You are planning to go grocery shopping and want to determine if you can buy both the products within your budget.

// 1. Declare the variables `milkPrice` and `breadPrice` and assign them the respective prices of the grocery items.
//     - `milkPrice`: 199 (Milk)
//     - `breadPrice`: 299 (Bread)
// 2. Declare the `budget` variable and assign it the specified budget amount i.e. 300.
// 3. Calculate the total price of the two grocery items by adding `milkPrice` and `breadPrice`.
// 4. Compare the total price with the `budget` using an appropriate operator.
// 5. Store the result in the `areBothUnderBudget` variable.
// 6. Print the result to the console using the following statement: "Can I buy both Milk and Bread within my budget? {result}"


let milkPrice =199;
let breadPrice =299;

let budget=300;

let totalPrice=milkPrice+breadPrice;

let areBothUnderBudget = budget > totalPrice;

console.log("Can I buy both Milk and Bread within my budget?",areBothUnderBudget); //false

// Can I buy both Milk and Bread within my budget? false

//************************************************************** */


// You have participated in four cricket matches played at different clubs. Your goal is to get selected for a prestigious cricket camp, and the selection criteria require an average score of 60 or higher across the matches. Complete the provided code snippet to determine if you have met the selection criteria.

// **Selection for Cricket Camp**

// 1. Declare four variables, **`gangaCricketClubScore`**, **`yamunaCricketClubScore`**, **`narmadaCricketClubScore`**, and **`godavariCricketClubScore`**, and assign them the respective scores for matches played at each club.
//     - **`gangaCricketClubScore`**: 78
//     - **`yamunaCricketClubScore`**: 63
//     - **`narmadaCricketClubScore`**: 52
//     - **`godavariCricketClubScore`**: 72
// 2. Declare a variable named **`minimumAverage`** and assign it the value of 60, representing the required average score for selection.
// 3. Calculate the average score by adding the scores of all four matches and dividing the sum by 4. Store the result in a variable named **`averageScore`**.
// 4. Compare the calculated average score with the minimum average using a comparison operator.
// 5. Store the result in a variable named **`isSelected`**.
// 6. Print the result to the console using the following format: "Am I selected for the cricket camp? {result}".


let gangaCricketClubScore = 78;
let yamunaCricketClubScore =63;
let narmadaCricketClubScore =52;
let godavariCricketClubScore=72;

let minimumAverage=60;

let averageScore =(gangaCricketClubScore+yamunaCricketClubScore+narmadaCricketClubScore+godavariCricketClubScore)/4;

// console.log(averageScore);

let isSelected = minimumAverage<averageScore;

console.log("Am I selected for the cricket camp?",isSelected);//true;

// Am I selected for the cricket camp? true

//************************************************************** */

// You have a group of students and want to check if they can be divided into equal groups of 4 and 9.
//  Your task is to complete the provided code snippet 
// and check the divisibility of the number of students using the modulo operator.

// 1. Declare a variable named `numberOfStudents` and assign it a numerical value of 72.
// 2. Check if the `numberOfStudents` is divisible by 4 by using the modulo operator (`%`) and comparing the result with 0. Store the result in a variable named `isDivisibleBy4`.
// 3. Check if the `numberOfStudents` is divisible by 9 using the same approach. Store the result in a variable named `isDivisibleBy9`.
// 4. Print the result of the divisibility by 4 to the console using the following format: "Can the students be divided into groups of 4? {result}".
// 5. Print the result of the divisibility by 9 to the console using the following format: "Can the students be divided into groups of 9? {result}".



let numberOfStudents=72;
let isDivisibleBy4=numberOfStudents%4==0;

let isDivisibleBy9=numberOfStudents%9==0;

console.log("Can the students be divided into groups of 4? ", isDivisibleBy4);
console.log("Can the students be divided into groups of 9? ", isDivisibleBy9);

// Can the students be divided into groups of 4?  true
// Can the students be divided into groups of 9?  true


// ### 
//************************************************************** */

// In this exercise, 

//Create a student's performance based on their marks in three subjects and the presence of a drama school endorsement. You will calculate their grade and make a choice based on the average grade and endorsement.

// 1. Declare three variables, **`subject1Marks`**, **`subject2Marks`**, and **`subject3Marks`**, and assign them the respective marks for the three subjects.
//     - **`subject1Marks`**: 85
//     - **`subject2Marks`**: 92
//     - **`subject3Marks`**: 78
// 2. Calculate the average marks by adding the marks of all three subjects and dividing the sum by 3. Assign the result to a variable named **`averageMarks`**.
// 3. Declare a variable named **`hasDramaSchoolEndorsement`** and assign it a boolean value (**`true`**) indicating that the student has a drama school endorsement.
// 4. Evaluate the student's performance and make a choice based on the average marks 
//and endorsement.
// If the average marks are greater than or equal to 80 or the student has a drama school endorsement, print to the console: “Is the user selected? {result}”.



let subject1Marks = 85;
let subject2Marks =92;
let subject3Marks =78;

let averageMarks=subject1Marks+subject2Marks+subject3Marks/3;

// console.log("avg",averageMarks);
let hasDramaSchoolEndorsement = true;

console.log("“Is the user selected?.",averageMarks>hasDramaSchoolEndorsement);

// “Is the user selected?. true

//************************************************************** */

// 1. Declare two variables, **`foodBill`** and **`hasZomatoGoldMembership`**, and assign them the values of **`1500`** 
// and **`true`**, respectively.
// 2. Check whether a user qualifies to pay the food bill at a discounted price based on the
//  following criteria. Any one of the criteria should suffice for the user to qualify:
//     - The food bill is less than Rs. 2000.
//     - The user has a Zomato Gold Membership.
// 3. Assign the result to a variable named **`qualifiesForDiscountedBill`**.
// 4. Print the result to the console using the following format: "Does the user qualify to
//  pay the food bill at a discounted price? {result}".

let foodBill=1500;
let hasZomatoGoldMembership=true;

let qualifiesForDiscoutedBill=foodBill<2000 && hasZomatoGoldMembership==true;

 console.log("Does the user qualify to pay the food bill at a discounted price? ",qualifiesForDiscoutedBill);console

//  Does the user qualify to pay the food bill at a discounted price?  true

//************************************************************** */


// 1. Declare five variables, **`piggybank1Balance`**, **`piggybank2Balance`**, **`penCost`**, **
//`notebookCost`** and **`pencilCost`**,
// and assign them the values **`2000`**, **`1500`**, **`50`**, **`100`** and **`20`**, respectively.
// 2. Calculate the total cost of the items by adding the costs of a pen, notebook, and pencil.
// Assign the result to a variable named **`totalCost`**.
// 3. Check if the purchase is affordable based on the available bank balance in any one of the
// piggy banks. The purchase is considered affordable if the total cost is less than or equal to 
//the balance of either Piggy Bank 1 or Piggy Bank 2.
// 4. Assign the result of the check to a variable named **`canWeAffordStationery`**.
// 5. Print the result to the console using the following format: "Can you afford the purchase? {result}"


let piggybank1Balance =2000;
let piggybank2Balance =1500;
let penCost =50;
let notebookCost =100;
let pencilCost =20;

let totalCost =penCost + notebookCost+pencilCost;

// console.log("cost",totalCost);
let canWeAffordStationery=totalCost <=piggybank1Balance || totalCost <=piggybank2Balance ;
console.log("can you afford the purchase",canWeAffordStationery);//true;
// can you afford the purchase true