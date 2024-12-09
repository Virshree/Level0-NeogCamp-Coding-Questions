const numbersArray = [33, 57, 24, 49, 52, 66];

function printOriginalArray(){

    console.log("Original array is :",numbersArray);
}
printOriginalArray();
// Original array is : [ 33, 57, 24, 49, 52, 66 ]

function divideNumbersByThree(){
    let newArray=[];

    for(let i=0;i<numbersArray.length;i++){
        newArray.push(numbersArray[i]/3);
    }
    console.log("Array with numbers divided by 3: ",newArray);
}
 divideNumbersByThree(numbersArray);
// Array with numbers divided by 3:  [ 11, 19, 8, 16.333333333333332, 17.333333333333332, 22 ]

function findNumInArray(searchNum){
       
    searchNum=true;
    for(let i=0;i<numbersArray.length;i++){
        if(numbersArray.includes(24)){
           searchNum=true;
        //    console.log(searchNum);
        }
        else{  searchNum=false;
        }
    }
    console.log("Search num :24",searchNum);
}
 findNumInArray();
// Search num :24 true

function findLargestNumberDivisibleBy5(numbers){
    let largestNumber=numbers[0];

    for(let i=0;i<numbers.length;i++){
        
        if(numbers[i]>largestNumber){
            largestNumber=numbers[i];
            
        }
       

    }
    console.log("Largest number Divisile by 5 :",largestNumber%5==0? " ":"0");
}
 findLargestNumberDivisibleBy5(numbersArray);
// Largest number Divisile by 5 : 0

