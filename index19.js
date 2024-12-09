
function warmUser(userName){
    console.log("Hey there, " + userName + "! You are running out of storage.");


}
// warmUser("Sam");


function congratulationsMessage(message){

    console.log(message);
    return message;
}
// congratulationsMessage("$$Congratulations! You won a lottery.$$")


function concatenateKeywords(keyword1,keyword2){

    console.log(keyword1+"-"+keyword2);

    return keyword1,keyword2
}
// concatenateKeywords("if", "else");if-else


function showTertiaryColors(color1,color2,color3,color4,color5,color6) {

    console.log("Six Tertiary colors: ",color1+"-"+color2+","+color3+"-"+color2+","+color3+"-"+color4+","+color5+"-"+color4+","+color5+"-"+color6+","+color1+"-"+color6);


}
// showTertiaryColors("Red","Orange" , "Yellow", "Green", "Blue", "Violet");


//Six Tertiary colors:  Red-Orange,Yellow-Orange,Yellow-Green,Blue-Green,Blue-Violet,Red-Violet


function decrementAgeBy10(age){

    console.log(age-10);
    return age;
}
// decrementAgeBy10(35)//25


function getRemainder(num1,num2){

    console.log(num1%num2);

}
// getRemainder(10,3);//1

function calculateTotalPrice(price,quantity){
    
    let totalPrice =price * quantity;
    console.log(totalPrice);
    return totalPrice;
}
// calculateTotalPrice(120,10);//1200

function calculateTotalAmount(price1,price2,quantity1,quantity2){

    let totalAmount=price1*quantity1+price2*quantity2;

    console.log(totalAmount);
    return totalAmount;

}
// calculateTotalAmount(120,150,10,15);//3450



function checkAge(age){
    if(age>=18){
        console.log("You are eligible for voting ");//true

    }
}
// checkAge(21);

function compareNumbers(num1, num2){

    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }
    else{
        console.log(`${num2} is greater than ${num1}`);
    }

}
// compareNumbers(10,5);

// 10 is greater than 5

function calculateShippingCost(totalWeight,country,baseCost){
    let updatedCost;
    if(totalWeight<1 && country=="Local"){

         updatedCost=baseCost+10;
        console.log("The updated shipping cost is :",updatedCost);//true
        return updatedCost;
    }
    else if(totalWeight >1 && country=="International"){
        updatedCost=baseCost+20;
        console.log("The updated shipping cost is :",updatedCost);//false
        return updatedCost;
    }
    else{
        console.log(updatedCost);
        return updatedCost;
    }
}
// calculateShippingCost(0.5,"Local",50);

// The updated shipping cost is : 60