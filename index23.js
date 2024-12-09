//Shopping cart with price and category 

let product1="Laptop";
let price1=999;
let category1="Electronics";

let product2="Running Shoes";
let price2=799;
let category2="Footwear";

let product3="T-shirt";
let price3=199;
let category3="Clothing";


let totalPrice;
function getTotalPrice(totalPrice){

    totalPrice = price1 + price2 + price3;
    return totalPrice;
}

let totalCartPrice=getTotalPrice(totalPrice);



let discount=0.1;

function calculateDiscount(discount){

    if(category1=="Electronics"){

        let discountElectronicsAmt=(price1/100)*discount;
        return discountElectronicsAmt;

    }

}

let finalTotalPrice=calculateDiscount(discount);


// let discountAmount2=(price2/100)*0;
// let discountAmount3=(price3/100)*0;

console.log("====== Cart Summary ======");
console.log("Product 1:",product1);
console.log("Price of product 1:",price1);
console.log("Discount :",discount);
console.log("Final  Price of Product:$",finalTotalPrice);
console.log("\n");

console.log("Product 2:",product2);
console.log("Price of product 2:",price2);
console.log("Discount : ",0);
console.log("Final  Price of Product:$",price2);
console.log("\n");
console.log("Product 3:",product3);
console.log("Price of product 3:",price3);
console.log("Discount :",0);
console.log("Final  Price of Product:$",price3);

console.log("\n");
// console.log("Final Total Price: " + finalTotalPrice);
console.log("Total Cart price:$",totalCartPrice);


/*
====== Cart Summary ======
Product 1: Laptop
Price of product 1: 999
Discount : 0.1
Final  Price of Product:$ 0.9990000000000001


Product 2: Running Shoes
Price of product 2: 799
Discount :  0
Final  Price of Product:$ 799


Product 3: T-shirt
Price of product 3: 199
Discount : 0
Final  Price of Product:$ 199


Total Cart price:$ 1997
*/