function sumUptoN(n){

    let sum=0;

    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    console.log(sum);
}
// sumUptoN(10);

//55

function sumOfEvenNumbersUpToN(n){

    let sum=0;
    for(let i=1;i<=n;i++){
        if(i%2==0){
            sum=sum+i;
        }
    }
    console.log(sum);
}
// sumOfEvenNumbersUpToN(9);
//20

function sumDivisibleByFiveAndSevenUpToN(n){

    let divisibleby5=0;
    let divisbleby7=0;

    for(let i=1;i<=n;i++){
        if(i%5==0){
            divisibleby5=divisibleby5+i;
        }
        if(i%7==0){
            divisbleby7=divisbleby7+i;
        }
    }
    console.log("sum of numberdivisibleby5 :",divisibleby5);
    console.log("sum of numberdivisibleby7 :",divisbleby7);
}
// sumDivisibleByFiveAndSevenUpToN(35);

// sum of numberdivisibleby5 : 140
// sum of numberdivisibleby7 : 105

function factorialof7(n){
    let result=1;
    for(let i=1;i<=n;i++){

        result=result*i;
        // console.log("iterations: "+i +"*" +i*result+" = "+result);


    }
    console.log(result);
}
// factorialof7(7);
// 5040


