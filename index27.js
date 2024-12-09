
function printNumberInDecrement(){

    for(let i=10;i>=1;i--){
        console.log(i);
    }
}
// printNumberInDecrement();

/*
10
9
8
7
6
5
4
3
2
1
*/


function printReverseTableof7(){

    for(let i=10;i>=1;i--){

        console.log("7 * "+i+" = "+7*i);
    }
}
// printReverseTableof7();

/*

7 * 10 = 70
7 * 9 = 63
7 * 8 = 56
7 * 7 = 49
7 * 6 = 42
7 * 5 = 35
7 * 4 = 28
7 * 3 = 21
7 * 2 = 14
7 * 1 = 7
*/

function printthirdNumberinDecrement(){

    for(let i=12;i>=3;i=i-3){

        console.log(i);
    }
}
// printthirdNumberinDecrement();

/*  

12
9
6
3
*/

function printNumberDivisibleBy5(start,end){

    if(start==end){
        return
    }
        for(let i=start;(start<end?i<=end:i>=end);(start<end?i++:i--))
        {
            if(i%5==0){
                console.log(i);
            }
        }
    
    }
       
// printNumberDivisibleBy5(1,1);


function printRangeNumberfromInput(num){
    
    console.log("Enter number",num);
    for(let i=1;i<=num;i++){
        console.log(i);
    }
}
// printRangeNumberfromInput(5);


function printOddNumbers(num){
    console.log("Enter number",num);
    for(let i=1;i<=num;i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}
// printOddNumbers(25);

//1 3 5 7 9 11 13 15 17 19 21 23 25

function  printallNumbersDivisibleBy5(num){
    console.log("Enter number",num);

    for(let i=1;i<=num;i++){
        if(i%5==0){
            console.log(i);
        }
    }

}
// printallNumbersDivisibleBy5(15);

//5 10 15