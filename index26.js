
function printNumbers(){
    for(let i=100;i<=120;i++){

        console.log(i);
    }
}
// printNumbers();
/*
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
*/

function printRepeatNumbers(){

    let repeat9="";
    for(let i=0;i<=3;i++){
        repeat9=repeat9+"9";
        console.log(repeat9);

    }
}
// printRepeatNumbers();
/*
9
99
999
9999*/


function printRepeatCharacters(){

    let repeatz="";
    for(let i=0;i<=4;i++){
        repeatz=repeatz+"z";
        console.log(repeatz);
    }
}
// printRepeatCharacters();

/*
z
zz
zzz
zzzz
zzzzz
*/


function printRepeatSymbols(){

    let symbol="";
    for(let i=0;i<=4;i++){
        symbol=symbol+"*";
        console.log(symbol);
    }
}
// printRepeatSymbols();

/*
*
**
***
****
*****
 */


function printNumberPattern(){

    let number="";
    for(let i=1;i<=9;i++){
        number=number+i;
        console.log(number);
    }
}
// printNumberPattern();


/*
1
12
123
1234
12345
123456
1234567
12345678
123456789
*/

function printTableof5(){

    for(let i=1;i<=10;i++){
        let result=5*i;

        console.log(" 5 * "+i + " = "+result);

    }
}

// printTableof5();
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/

function printSquareofNumbers(){

    for(let i=21;i<=25;i++){
        
        console.log(i +" * "+ i +" = "+ i*i);
    }
}
// printSquareofNumbers();

/*
21 * 21 = 441
22 * 22 = 484
23 * 23 = 529
24 * 24 = 576
25 * 25 = 625
*/