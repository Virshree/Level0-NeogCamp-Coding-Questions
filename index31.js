
function checkNumberPattern(n,m){
let numberPattern='';

    for(let i=1;i<=n;i++){
        numberPattern=numberPattern+i;
        
        if(i%m==0){
          
            numberPattern=numberPattern+'-';
            
        }
       
    }console.log(numberPattern);

  }  
  
// checkNumberPattern(9,4)

// 1234-5678-9


function checkNumberDivisible(n,m){

    let divisble='';
    let notdivisible='';

    for(let i=1;i<=n;i++){
        if(i%m==0){
            divisble=divisble+i+" ";
        }

        else{
            notdivisible=notdivisible+i+" ";
        }
    }
    console.log("Divisible by 6: ",divisble);
    console.log("Not divisible by 6: ",notdivisible);

}
// checkNumberDivisible(20,6);
/*
Divisible by 6: 6 12 18 
Not divisible by 6: 1 2 3 4 5 7 8 9 10 11 13 14 15 16 17 19 20*/


function printDivisibleNumbersBetween(p,n,m){

        if(p<n && n<m){
            for(let i=n;i<=m;i++){
                if(i%p==0){
                    console.log(i);
                }
            }
        }
}
// printDivisibleNumbersBetween(3,5,15);

/*
6
9
12
15

*/