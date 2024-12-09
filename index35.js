function averageOfNumbersuptoN(n){

    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i/n;
    }
    console.log("The average of numbers from 1 to 10 :",sum);
}
// averageOfNumbersuptoN(10);
// The average of numbers from 1 to 10: 5.5


function sumOfNumbersGreaterThanSixUpToN(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        if(i>6){
            sum=sum+i;
        }
    }
    console.log("The sum of numbers : ",sum);
}

// sumOfNumbersGreaterThanSixUpToN(12);
// The sum of numbers is: 57


function sumDivisibleByEightUpToN(n){

    let sum8=0;
    let sum9=0;
    let sum10=0;
    for(let i=1;i<=n;i++){
        if((i%8==0)){
            sum8=sum8+i;
            console.log(i);

            // console.log("8: ",sum8);
        
        }   
        // else  if((i%9==0) && (i%40==0)){
        //     sum9=sum9+i;
        //     console.log(i)
        //     // console.log("9:",sum9);
        // }
        // else ((i%10==0)&& (i%40==0) )
        // {
        //     sum10=sum10+i;
        //     console.log(i)
        //     // console.log("10:",sum10);
        // }
    }
    console.log("sum is  8 :",sum8);
    // console.log("sum is  9:",sum9);
    // console.log("sum is  10:",sum10);
}
// sumDivisibleByEightUpToN(40);



function sumEvenandOddUptoN(n){
    let sumeven=0;
    let sumodd=0;

    for(let i=1;i<=n;i++){
            if(i%2==0){
                sumeven=sumeven+i;
            }
            if(i%2!==0){
                sumodd=sumodd+i;
            }
    }
    console.log("sum of even numbers:",sumeven);
    console.log("sum of odd numbers:",sumodd);
}
// sumEvenandOddUptoN(30);

// sum of even numbers: 240
// sum of odd numbers: 225