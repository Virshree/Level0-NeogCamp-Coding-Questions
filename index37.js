const numbers=[1,2,3,4,5,6,7,8,9,10];

for(let i=1;i<numbers.length;i++){
    
    if(i%3==0){
         console.log(i);
    }
}
/*
3
6
9*/

for(let i=1;i<=numbers.length;i++){
    if(i%5==0){
        console.log(i);
    }
}
/*
5
10

*/

//new array divisible by 2

let newArray=[];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        newArray.push(numbers[i]);
        
    }
    
}
 console.log("New array  is : ",newArray);
 //New array  is :  [ 2, 4, 6, 8, 10 ]

let sum=0;
for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
}
 console.log("Sum of all numbers: ",sum);//55

let sumeven=0;
let sumodd=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        sumeven=sumeven+numbers[i];
    }
    else{
        sumodd=sumodd+numbers[i];
    }
}
console.log("Sum of odd numbers: ",sumodd);
console.log("Sum of even numbers:",sumeven);

// Sum of odd numbers:  25
// Sum of even numbers: 30


