//age check

// 1. Declare a variable named **`personAge`** and assign it a value of 25.
// 2. Check if the person's age is between 18 and 60, inclusive of both 18 and 60.
// 3. Assign the result of the check to a variable named **`isAgeInRange`**.
// 4. Print the result to the console using the following format: "Is the person's age between
//  18 and 60? {result}"


let personAge = 25;
let isAgeInRange =(personAge >= 18 && personAge<=60)

console.log("Is the person's age between 18 and 60? ",isAgeInRange)//true;

/**********************************************/
// **TV Selection**

// 1. Declare three variables, **`tvScreenSize`**, **`tvBrand`** and **`tvPrice`**. 
// //Assign them the values of **`55`**, **`Sony`** and **`50000`**, respectively.
// 2. Check if a TV meets the following criteria:
//     - The screen size is greater than or equal to **`50`**.
//     - The TV brand is either **`Sony`** or **`Samsung`**.
//     - The price of the TV is less than or equal to **`60000`**.
// 3. Assign the result of the check to a variable named **`meetsCriteria`**.
// 4. Print the result to the console using the following format: "Does the TV
// meet the criteria? {result}"


let tvScreenSize =55;
let tvBrand = "Sony";
let tvPrice=50000;

let meetCriteria =(tvScreenSize>=50 || tvBrand=="Sony" || tvBrand=="Samsung" || tvPrice <=60000);

console.log("Does the TV meet the criteria?",meetCriteria);//true

/**********************************************/


// **Smartwatch Selection**

// 1. Declare three variables, **`watchReleaseYear`**, **`watchSize`** and
//**`watchBrand`**. Assign them the values of **`2022`**, **`"L"`** and **`"Apple"`**,
// respectively.
// 2. Check if a smartwatch meets the following criteria:
//     - The year of release is one year older than the current year.
//     - The watch size is either **`"M"`** or **`"L"`**.
//     - The watch brand is either **`"Apple"`** or **`"Samsung"`**.
// 3. Assign the result of the check to a variable named **`isDiscountApplicable`**.
// 4. Print the result to the console using the following format: "Is the discount applicable? 
//{result}"


let watchReleaseYear = 2022;
let watchSize="L";
let watchBrand = "Apple";

let isDiscountApplicable =watchReleaseYear ==2023 && (watchSize =="M" || watchSize=="L") &&
 (watchBrand=="Apple" || watchBrand=="Samsung");


 console.log("Is the discount applicable?",isDiscountApplicable)//false