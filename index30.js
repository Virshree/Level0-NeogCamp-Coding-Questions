
function printNumberDivisible(n,m){
    let output="";
    for(let i=1;i<=n;i++){
    output=output+i;
        if(i%m==0){ 
           output=output+"#";
           
        }
        
    }
     console.log(output);
}
// printNumberDivisible(9,3);

//123#456#789


function checkNumberDivisible(n,m){

    let divisibleNumbers='';
    let notDivisibleNumber='';

    for(let i=1;i<=n;i++){
        if(i%m==0 ){
             divisibleNumbers=divisibleNumbers+i+" ";
        

        }
            else{
                notDivisibleNumber=notDivisibleNumber+i+" ";
            }
    }

             console.log("Divisible by 3 :" ,divisibleNumbers+" ");

     console.log("Not Divisible by 3:",notDivisibleNumber);
}
// checkNumberDivisible(10,3);

/**
 * 
 *  Divisible by 3 : 3 6 9  
    Not Divisible by 3: 1 2 4 5 7 8 10 
 */

function printDivisibleNumberBetween(p,n,m){

    if(p<n && n<m){
        
        for(let i=n;i<=m;i++){
            if(i%p==0){
                console.log(i);
            }
        }
    }
   
}
// printDivisibleNumberBetween(2,3,9);
/*
4
6
8
*/