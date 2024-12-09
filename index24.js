//loops-for

function printNumbers(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
// printNumbers();

/*1
2
3
4
5
6
7
8
9
10*/

function printRepeatNumbers(){
    let pattern="";

    for(let i=1;i<=4;i++){
        pattern=pattern+"1";
        console.log(pattern);    
    }
}
// printRepeatNumbers();


/*
1
11
111
1111
*/

function printRepeatCharacters(){
    let patternA="";
    for(let i=1;i<=5;i++){
        patternA=patternA+"a";
        console.log(patternA);

    }
}
// printRepeatCharacters();

/*
a
aa
aaa
aaaa
aaaaa
*/

function printNumberPattern(){
    let j="";
    for(let i=1;i<=5;i++){
        j=j+i;
        
        console.log(j);
    }
}
// printNumberPattern();

/*
1
12
123
1234
12345
*/
function printTableof2(){

    for(let i=0;i<=10;i++){
        let result=2*i;
        console.log("2 * "+i+ " = "+result);
    }
}
// printTableof2();

/*
2 * 0 = 0
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
*/