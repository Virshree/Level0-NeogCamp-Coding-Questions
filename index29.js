
function printAllNumbersinDecreasing(){

    for(let i=30;i>=11;i--){
        console.log(i);
    }
}
// printAllNumbersinDecreasing();
/*

30
29
28
27
26
25
24
23
22
21
20
19
18
17
16
15
14
13
12
11
*/

function printRevTableof9from135to9(){

    for(let i=15;i>=1;i--){
        console.log("9 * " +i+ " = "+9*i);

    }
}
// printRevTableof9from135to9();
/*

9 * 15 = 135
9 * 14 = 126
9 * 13 = 117
9 * 12 = 108
9 * 11 = 99
9 * 10 = 90
9 * 9 = 81
9 * 8 = 72
9 * 7 = 63
9 * 6 = 54
9 * 5 = 45
9 * 4 = 36
9 * 3 = 27
9 * 2 = 18
9 * 1 = 9
*/

function printEvery5thNumber(){

    for(let i=50;i>=5;i=i-5){
        console.log(i);
    }
}

// printEvery5thNumber();

/*

50
45
40
35
30
25
20
15
10
5
*/

function  printNumberDivisibleBy8(num){

    for(let i=1;i<=num;i++){
        if(i%8==0){
            console.log(i);
        }
    }
}

// printNumberDivisibleBy8(30);

/*
8
16
24
*/

function printOddNumberfrom5to15(num){

    for(let i=5;i<=num;i++){
        console.log(i);
    }
}
// printOddNumberfrom5to15(15);

function printNumberDivisibleBy5and7(num){

    for(let i=1;i<=num;i++){
        if((i%5==0 && i%7==0)){
            console.log(i);
        }
    }
}
// printNumberDivisibleBy5and7(50);
// 35
