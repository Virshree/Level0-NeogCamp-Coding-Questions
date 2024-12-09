// ### 1.1

// In this exercise, you will evaluate a cricketer's performance based on his runs scored in 
// three matches, batting average, and his fielding skills. The cricketer's selection will depend 
// on his batting average being more than 60 and his excellent fielding.

// 1. Declare three variables, **`runsMatch1`**, **`runsMatch2`**, and **`runsMatch3`**, and
//  assign them the respective runs scored by the cricketer in three matches.
//     - **`runsMatch1`**: 78
//     - **`runsMatch2`**: 102
//     - **`runsMatch3`**: 45
// 2. Calculate the total runs scored by adding the runs scored in all three matches. Assign the 
// result to a variable named **`totalRuns`**.
// 3. Calculate the batting average by dividing the total runs by 3. Assign the result to a variable
//  named **`battingAverage`**.
// 4. Declare a variable named **`excellentFielding`** and assign it a boolean value (**`true`**) 
// indicating that the cricketer has done excellent fielding.
// 5. Evaluate the cricketer's performance and make a selection based on his batting average and 
// fielding skills i.e If the batting average is more than 60 and the cricketer has done excellent 
// fielding, then the cricketer is selected.
// 6. Print result to the console in the following format: “Is the cricketer selected? {result}”.



let runsMatch1=78;
let runsMatch2=102;
let runsMatch3=45;

let totalRuns=runsMatch1+runsMatch2+runsMatch3;
// console.log(totalRuns);//225
let battingAverage=totalRuns/3;

// console.log(battingAverage);//75
let excellentFieldingAverage=true;

console.log("Is the cricketer selected?",excellentFieldingAverage);//true;

/***************************************** */
//1.2

// 1. Declare two variables, **`gymMembership`** and **`purchaseAmount`**, and assign them the 
// values of **`true`** and **`1500`**, respectively.
// 2. Check whether a user qualifies to purchase an item from the gym store at a
//  discounted price based on the following criteria. Any one of the criteria should suffice for 
//  the user to qualify:
//     - The user has a gym membership.
//     - The purchase amount is more than Rs. 1499.
// 3. Assign the result of the check to a variable named **`qualifiesForDiscountedPurchase`**.
// 4. Print the result to the console using the following format: "Does the user qualify to purchase
//  the item at a discounted price? {result}".

let gymMembership=true;
let purchaseAmount=1500;

let qualifiesForDiscountedPurchase = gymMembership || purchaseAmount >=1499;

console.log("Does the user qualify to purchase  the item at a discounted price?",qualifiesForDiscountedPurchase); //true;


// ### 1.3

// 1. Declare five variables, **`iciciBalance`**, **`axisBalance`**, **`laptopCost`**, **`phoneCost`**,
//  and **`headphonesCost`**, and assign them the values **`8000`**, **`6000`**, **`35000`**, **`25000`**, 
//  and **`3000`**, respectively.
// 2. Calculate the total cost of the items by adding the costs of a laptop, phone and headphones.
//  Assign the result to a variable named **`totalCost`**.
// 3. Check if the purchase is affordable based on the available bank balance in any one of the banks. 
// The purchase is considered affordable if the total cost is less than or equal to the balance 
// of either
//  the ICICI bank account or the Axis bank account.
// 4. Assign the result of the check to a variable named **`canWeAffordElectronics`**.
// 5. Print the result to the console using the following format: "Can you afford the purchase?
//  {result}"


let iciciBalance =8000;
let axisBalance =6000;
let laptopCost = 35000;
let phoneCost =250;
let headphonesCost =3000;

let totalCost=laptopCost +phoneCost +headphonesCost;
// console.log(totalCost);//38250

let canWeAffordElectronics = totalCost <=iciciBalance || totalCost <=axisBalance ;

 console.log("can you afford the purchase?",canWeAffordElectronics);//false



// ### 2.1

// **Speed Check**

// 1. Declare a variable named **`carSpeed`** and assign it a value of 65.
// 2. Check if the car's speed is between 40 and 80, inclusive of both 40 and 80.
// 3. Assign the result of the check to a variable named **`isSpeedInRange`**.
// 4. Print the result to the console using the following format: "Is the car's speed between
//  40 and 80? {result}"



let carSpeed=65;
let isSpeedInRange=carSpeed>40 && carSpeed<80;

console.log("Is the car's speed between  40 and 80?",isSpeedInRange);//true;


// ### 3.1

// **Phone Selection**

// 1. Declare three variables, **`phoneMemory`**, **`phonePrice`**, and **`phoneBrand`**.
//  Assign them the values of **`64`**, **`25000`**, and **`OnePlus`**, respectively.
// 2. Check if a phone meets the following criteria:
//     - The memory size is greater than or equal to **`128`**.
//     - The price of the phone is less than or equal to **`35000`**.
//     - The phone brand is either **`OnePlus`** or **`Samsung`**.
// 3. Assign the result of the check to a variable named **`meetsCriteria`**.
// 4. Print the result to the console using the following format: "Does the phone meet the criteria?
//  {result}"


let phoneMemory=64;
let phonePrice=25000;
let phoneBrand="OnePlus";


let meetCriteria=(phoneMemory>=128) && (phonePrice<=35000) && 
                (phoneBrand == "OnePlus "|| phoneBrand == "Samsung");

console.log("Does the phone meet the criteria?",meetCriteria);//false;


// **Shoe Selection**

// 1. Declare three variables, **`remainingItems`**, **`shoeSize`**, and **`shoeBrand`**. 
//Assign them the values of **`4`**, **`"M"`**, and **`"Nike"`**, respectively.
// 2. Check if a shoe meets the following criteria:
//     - The number of remaining items is less than **`5`**.
//     - The shoe size is equal to **`"M"`**.
//     - The shoe brand is either **`"Nike"`** or **`"Adidas"`**.
// 3. Assign the result of the check to a variable named **`isDiscountApplicable`**.
// 4. Print the result to the console using the following format: "Is the discount applicable? 
//{result}"


let remainingItems=4;
let shoeSize='M';
let shoeBrand='Nike';

let isDiscountApplicable=(remainingItems<=5) && (shoeSize=='M') && 
                        (shoeBrand=='Nike' || shoeBrand=='Adidas');

console.log("Is the discount applicable ?",isDiscountApplicable);//true;
