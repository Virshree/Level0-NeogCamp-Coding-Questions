const srkEarnings = [12500020, 15000465, 950000302, 201800006, 
    18000000, 11000000, 900054608, 130050087, 140000000, 160000109];


console.log("Earnings divisible by 3:");

for(let i=0;i<srkEarnings.length;i++){
    if(srkEarnings[i]%3==0){
        console.log(srkEarnings[i]);
    }
}
/*
Earnings divisible by 3:
15000465
18000000
130050087*/

// console.log("Earnings divisible by 5:")
for(let i=0;i<srkEarnings.length;i++){

    if(srkEarnings[i]%5==0){
        console.log(srkEarnings[i]);
    }
}
/*
Earnings divisible by 5:
12500020
15000465
18000000
11000000
140000000
*/

let newArray=[];

for(let i=0;i<srkEarnings.length;i++){
    if(srkEarnings[i]%2==0){
        newArray.push(srkEarnings[i]);
    }
  
}
console.log("Earnings divisible by 2:",newArray);
// Earnings divisible by 2: [
//     12500020, 950000302,
//    201800006,  18000000,
//     11000000, 900054608,
//    140000000
//  ]

let sum=0;
for(let i=0;i<srkEarnings.length;i++){
    sum=sum+srkEarnings[i];
}
console.log("Total earnings of srk:",sum);


let sumeven=0;
let sumodd=0;
for(let i=0;i<srkEarnings.length;i++){
    if(srkEarnings[i]%2!=0){
        sumodd=sumodd+srkEarnings[i];
    }
    else{
        sumeven=sumeven+srkEarnings[i];
    }
}
console.log("Sum of odd earnings: ",sumodd);
console.log("Sum o even earnings: ",sumeven);

// Sum of odd earnings:  305050661
// Sum o even earnings:  2233354936