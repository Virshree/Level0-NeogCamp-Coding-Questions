// 1.2 Metro Ticket Price Calculation
 let passengerAge=65;
 let originalTicketPrice=150;

 if(passengerAge>60){
    
    let discountTicket=(originalTicketPrice/100)*15;

    let discountPrice=originalTicketPrice-discountTicket;

    // console.log("Ticket price for age greater than 60 : Rs.",discountPrice);
 }
 else{
    console.log("Ticket price for age less than or equal to 60",discountPrice);
 }


//  1.3 Maximum Score Check

let score1;
let score2;
let score3

 score1=85;
 score2=90;
 score3=78;

if(score2==90){
    // console.log("Student 2 has the highest score:",score2);//true;
}
else{
    console.log("Student 2 does not have the highest score",score2);//false;
}

// 1.4 Shopping Cart with Optional Delivery Charge


let item1="Mobile phone";
let item2="Headphones";
let item3="Laptop";
let item4="Smartwatch";

let price1=15000;
let price2=2500;
let price3=45000;
let price4=8000;

let totalCartPrice=price1+price2+price3+price4;

let deliveryChargeStatus="";

// console.log(totalCartPrice); 70500;
let deliveryCharge=99;
if(totalCartPrice<1999){

    let amt=totalCartPrice+deliveryCharge;

    console.log("Optional Delivery Charge: ₹",amt);
}
else{

    console.log("*** Shopping Cart Summary ***");
    console.log("Item 1: Mobile Phone - ₹",price1);
    console.log( "Item 2: Headphones - ₹",price2);
    console.log("Item 3: Laptop - ₹",price3);
    console.log("Item 4:Smartwatch -₹",price4);
    console.log("-------------------------------");

    console.log("Total cart price -₹",totalCartPrice);    
    console.log("Delivery charges: No Delivery Charge");
}

/*
*** Shopping Cart Summary ***
Item 1: Mobile Phone - ₹ 15000
Item 2: Headphones - ₹ 2500
Item 3: Laptop - ₹ 45000
Item 4:Smartwatch -₹ 8000
-------------------------------
Total cart price -₹ 70500
Delivery charges: No Delivery Charge


*/