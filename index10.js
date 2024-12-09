// 1.1 Age Verification

let age=18;
let isAdult=true;

if(isAdult && age==18){
    // console.log("Adult");
    // console.log("Age: " + age);
}


// 1.2 Movie Ticket Pricing


// let customerAge=22;
// let baseTicketPrice=200;

// if(customerAge<=18)
// {
//     let discount=(baseTicketPrice/100)*20;
//     let discountAmt=baseTicketPrice-discount;
//     console.log(discountAmt);//false 
// }
// else{
//     console.log("Final Ticket  price Rs.",baseTicketPrice);//200
// }

// 1.3 Smallest Number Check

let num1=25;
let num2=50;
let num3=20;

if(num3<num1 && num3<num2 ){
    // console.log(`The third number ${num3}, is the smallest`);//true
}
else{
    // console.log(`The third number ${num3}, is not the smallest.`);//false
}



// 1.4 Bookstore Shopping Cart

let book1="Harry Potter and the Sorcerer's Stone";
let book2="The Great Gatsby";
let book3="To Kill a Mockingbird";
let book4=" The Lord of the Rings";

let price1=400;
let price2=300;
let price3=250;
let price4=500;

let totalCartPrice=price1+price2+price3+price4;

let deliveryChargeStatus="";
let deliveryCharge=50;

if(totalCartPrice<799){
    console.log("Optional Delivery Charge",deliveryCharge+totalCartPrice);//false
}
else{
    //true statement
    console.log("*** Bookstore Shopping Cart Summary ***");
    console.log("Book 1: Harry Potter and the Sorcerer's Stone - ₹",price1);
    console.log("Book 2: The Great Gatsby - ₹",price2);
    console.log("Book 3: To Kill a Mockingbird - ₹",price3);
    console.log("Book 4: The Lord of the Rings - ₹",price4);

    console.log("----------------------------");
    console.log("Total Cart Price: ₹",totalCartPrice);
    console.log("Delivery charges : No Delivery Charge")
}

/*

*** Bookstore Shopping Cart Summary ***
Book 1: Harry Potter and the Sorcerer's Stone - ₹ 400
Book 2: The Great Gatsby - ₹ 300
Book 3: To Kill a Mockingbird - ₹ 250
Book 4: The Lord of the Rings - ₹ 500
----------------------------
Total Cart Price: ₹ 1450
Delivery charges : No Delivery Charge

*/