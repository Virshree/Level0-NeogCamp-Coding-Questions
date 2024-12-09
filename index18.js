//function


function greetUser(){
    console.log("Good morning!");
}

// greetUser();

function welcomeMessage(userName){

    console.log("Hey there,"+userName + "We are thrilled to have you");

}
// welcomeMessage("John!");


function formatMessage(message){

    console.log(message);
    return message;

}
// formatMessage("**Learning functions with return in javaScript.**");


function concatenateStrings(string1,string2){

    console.log(string1+string2);
    return string1+string2;
}
// concatenateStrings("Red ","Bull");


function addStrings(color1, color2,color3){

    console.log("The primary colors are: ",color1+", "+color2+","+color3);
    return color1+color2+color3;
}
// addStrings("Red","Yellow","Green");


function incrementAgeBy5(age){

    console.log(age+5);
    return age;
}
// incrementAgeBy5(25);//30



function calculateProduct(num1,num2){
    console.log(num1*num2);
    return num1*num2;
}
// calculateProduct(10,30);//300


function calculateDiscountAmount(price,discountPercentage){
    let discountAmt=(price/100)*discountPercentage;
    console.log(discountAmt);
    return discountAmt;
}
// calculateDiscountAmount(1000,20);//200


function calculateNetSalary(baseSalary,performanceBonus){

        let netSalary=baseSalary+performanceBonus;

        console.log(netSalary);

        return netSalary;
}

// calculateNetSalary(290000,20000);//310000

