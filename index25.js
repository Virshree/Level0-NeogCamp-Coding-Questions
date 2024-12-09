
function printNumbers(){
    for(let i=10;i<=20;i++){
        console.log(i);
    }
}
// printNumbers();
/*10
11
12
13
14
15
16
17
18
19
20*/


function printRepeatNumbers(){
    let pattern2="";

    for(let i = 0; i<=3;i++){
        pattern2=pattern2+"2 ";
        console.log(pattern2);

    }
}
// printRepeatNumbers();
/*
2
22
222
2222*/


function printRepeatCharacters(){

    let pattenb="";

    for(let i=0;i<=4;i++){
        pattenb=pattenb+"b";
        console.log(pattenb);
    }
}
// printRepeatCharacters();
/*
b
bb
bbb
bbbb
bbbbb*/

function printNumberPattern(){
    let numberPattern="";
    for(let i=1;i<=6;i++)  {
        numberPattern=numberPattern+i;
        console.log(numberPattern);

    }
   
}

// printNumberPattern();

/**
1
12
123
1234
12345
123456
 */


function printTableof3(){

    for(let i=1;i<=10;i++){
            let result=3*i;
            console.log("3 * " ,+i+ " = ", result);
    }
}
// printTableof3();
/*
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
3 * 10 = 30*/


function printSquareofNumber(){
    
    for(let i=11 ;i<=20 ;i++){

        let result=i*i ;

        console.log(i +" * "+ i+" = "+ result);

    }
}
// printSquareofNumber();

/*
11 * 11 = 121
12 * 12 = 144
13 * 13 = 169
14 * 14 = 196
15 * 15 = 225
16 * 16 = 256
17 * 17 = 289
18 * 18 = 324
19 * 19 = 361
20 * 20 = 400
*/