
function printNumberinDecrementOrder(){

    for(let i=20;i>=10;i--){
        console.log(i);
    }
}
// printNumberinDecrementOrder();

/*
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
10*/


function printReverseTableof6(){

    for(let i=10;i>=1;i--){

        console.log("6 * "+i+ " = " +6*i);

    }
}

// printReverseTableof6();

/*

6 * 10 = 60
6 * 9 = 54
6 * 8 = 48
6 * 7 = 42
6 * 6 = 36
6 * 5 = 30
6 * 4 = 24
6 * 3 = 18
6 * 2 = 12
6 * 1 = 6

*/


function printEvery10thNumber(){

    for(let i=100;i>=10;i=i-10){
        
        console.log(i);

    }

}

// printEvery10thNumber();

/*
100
90
80
70
60
50
40
30
20
10
*/

function printAllNumber1toN(num){

    for(let i=1;i<=num;i++){
        console.log(i);
    }
}
// printAllNumber1toN(8);

/*
1
2
3
4
5
6
7
8
 */

function printAllEvenNumber(num){
    for(let i=1;i<=num;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
// printAllEvenNumber(15);

/*
2
4
6
8
10
12
14

*/

function printNumberDivisbleBy5and10(num){


    for(let i=1;i<=num;i++){
        if((i%5==0) && (i%10===0)){
            console.log(i);
        }
    }
}
// printNumberDivisbleBy5and10(50);

/*

10
20
30
40
50

*/