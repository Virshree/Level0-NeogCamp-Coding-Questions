// ## **Bookstore Inventory**

// Consider the inventory of an Indian bookstore. Perform the following calculations 
//to determine the total value of the inventory and generate an inventory report:

// 1. Declare variables for the quantities and prices of three Indian books: `book1Quantity`,
// `book2Quantity`, `book3Quantity`, `book1Price`, `book2Price`, and `book3Price`.
//     - `book1Quantity`: 25
//     - `book2Quantity`: 15
//     - `book3Quantity`: 20
//     - `book1Price`: ₹350
//     - `book2Price`: ₹250
//     - `book3Price`: ₹200
// 2. Calculate the total value of each book by multiplying the quantity with its price. 
//Store the results in variables named `book1Value`, `book2Value`, and `book3Value`.
// 3. Calculate the total value of the inventory by adding the values of all three books.
// Store the result in a variable named `totalInventoryValue`.

// Print the following inventory report to the console:

// Indian Bookstore Inventory Report
// ---------------------------------
// Book 1: Mahabharata
// -Quantity:  [book1Quantity]
// - Price: ₹[book1Price]
// - Value: ₹[book1Value]

// Book 2: Ramayana
// - Quantity: [book2Quantity]
// - Price: ₹[book2Price]
// - Value: ₹[book2Value]

// Book 3: Gitanjali
// - Quantity: [book3Quantity]
// - Price: ₹[book3Price]
// - Value: ₹[book3Value]

// Total Inventory Value: ₹[totalInventoryValue]

        let book1Quantity=25;

        let book2Quantity=15
        let book3Quantity=20
        let book1Price =350
        let book2Price=250
        let book3Price=200
        
        let book1Value = book1Quantity*book1Price;
        let book2Value = book2Quantity*book2Price;

        let book3Value = book3Quantity*book3Price;


console.log(" Indian Bookstore Inventory Report");
console.log("---------------------------------------");

console.log("Book 1: Mahabharata");

console.log("-Quantity:  ",book1Quantity);
console.log("-Price: Rs.",book1Price);

console.log("-Value: Rs. ",book1Value);

console.log("Book 2: Ramayana");

console.log("-Quantity:  ",book2Quantity);
console.log("-Price: Rs.",book2Price);

console.log("-Value: Rs ",book2Value);

console.log("Book 3: Gitanjali");
console.log("-Quantity:  ",book3Quantity);
console.log("-Price: Rs.",book3Price);

console.log("-Value: Rs ",book3Value);

let totalInventoryValue=book1Value+book2Value+book3Value;

console.log("Total Inventory value: Rs",totalInventoryValue)

/*

 Indian Bookstore Inventory Report
---------------------------------------
Book 1: Mahabharata
-Quantity:   25
-Price: Rs. 350
-Value: Rs.  8750
Book 2: Ramayana
-Quantity:   15
-Price: Rs. 250
-Value: Rs  3750
Book 3: Gitanjali
-Quantity:   20
-Price: Rs. 200
-Value: Rs  4000
Total Inventory value: Rs 16500


*/