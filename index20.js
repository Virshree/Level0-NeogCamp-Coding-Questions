function checkEvenOdd(number){

    if(number%2==0){
        console.log("The number is even");//false
    }
    else{
        console.log("The number is odd");//true
    }
}

// checkEvenOdd(9)


function checkGrade(score,passingScore){

    if(score>=passingScore){
        console.log("Congratulations ! You have passed");//true;
    }
    else{
        console.log("No ! You have failed");//false;
    }
}
// checkGrade(85,60);


function calculateAllowance(age,isStudent,baseAllowance){
    let updatedAllowance;
    if(age<18 && isStudent){
        updatedAllowance = baseAllowance + 100;
        console.log("The updated Allowance is " + updatedAllowance);//true
    }
    else if(age<=18 && age>=25  && isStudent){
        updatedAllowance = baseAllowance + 50;
        console.log("The updated Allowance is " + updatedAllowance);//false
    }
    else{
        console.log("Base allowance",baseAllowance);
        return baseAllowance;
    }
}
// calculateAllowance(16,true,500);
// The updated Allowance is 600