const viratKohliRuns = [82, 120, 45, 66, 102, 55, 91, 76, 115, 42];

// 1.1 Print the runs scored which are divisible by 3.
console.log("Runs scored divisible by 3:")
for(let i=0;i<viratKohliRuns.length;i++){

    if(viratKohliRuns[i]%3==0){
         console.log(viratKohliRuns[i]);
    }
        
    
}

console.log("Runs scored divisible by 5: ");

for(let i=0;i<viratKohliRuns.length;i++){
    if(viratKohliRuns[i]%5==0){
        console.log(viratKohliRuns[i])
    }
}

// Runs scored divisible by 3:
// 120
// 45
// 66
// 102
// 42
// Runs scored divisible by 5: 
// 120
// 45
// 55
// 115

let newArray=[];

console.log("Runs scored divisible by 2: ");

for(let i=0;i<viratKohliRuns.length;i++){

    if(viratKohliRuns[i]%2==0){
            newArray.push(viratKohliRuns[i]);
            
    }
    
}
console.log(newArray)

// Runs scored divisible by 2: 
// [ 82, 120, 66, 102, 76, 42 ]


let sum=0;
for(let i=0;i<viratKohliRuns.length;i++){
    sum=sum+viratKohliRuns[i];
}
 console.log("Total runs scored by Virat Kohli: ",sum);
// Total runs scored by Virat Kohli:  794

let sumodd=0;
let sumeven=0;

for(let i=0;i<viratKohliRuns.length;i++){
    if(viratKohliRuns[i]%2==0){
        sumeven=sumeven+viratKohliRuns[i];
    }
    else{
        sumodd=sumodd+viratKohliRuns[i];
    }
}
console.log("Sum of odd runs scored:",sumodd);
console.log("Sum of even runs scored:",sumeven);

// Sum of odd runs scored: 306
// Sum of even runs scored: 488