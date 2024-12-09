function sumUptoN(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
        
    }
    console.log(sum);
    return sum;
}
// sumUptoN(5);
//15

function sumofOddNumbersUptoN(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        if(i%2!=0){
            sum=sum+i;
        }
    }
    console.log(sum);
}
// sumofOddNumbersUptoN(7);
// 16


function sumDivisibleByThreeAndSevenUptoN(n){
    let sumofDivisible3=0;
    let sumofDivisible7=0;

    for(let i=1;i<=n;i++){
        if(i%3==0){
            sumofDivisible3=sumofDivisible3+i;
    
            
        }
        if(i%7==0){
           sumofDivisible7=sumofDivisible7+i;
        

        }
        
    }
    console.log("sum of numbersdivisible by 3:",sumofDivisible3);
    console.log("sum of numbersdivisible by 7:",sumofDivisible7);

}

// sumDivisibleByThreeAndSevenUptoN(21);

// sum of numbersdivisible by 3: 84
// sum of numbersdivisible by 7: 42


function factorial(n){
    let num=1;
    for(let i=n;i>=n;i--){
        num=n*(n-1)*(n-2)*(n-3);
    }
    console.log(num);
    return num;
}
// factorial(5);

// 120


