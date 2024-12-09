const numbersArray = [22, 35, 18, 47, 50, 63];

function printOriginalArray(){

    console.log("Original array is :",numbersArray);
}
 printOriginalArray();

// Original array is : [ 22, 35, 18, 47, 50, 63 ]


function multiplyNumbersByTwo(){
    let newArray=[];

    for(let i=0;i<numbersArray.length;i++){
        newArray.push(2*numbersArray[i]);

    }
    console.log("Array with numbers multiplied by 2: ",newArray);
}

multiplyNumbersByTwo();
//  Array with numbers multiplied by 2:  [ 44, 70, 36, 94, 100, 126 ]


function convertEvenToOdd(){

    let convertedArray=[];

    for(let i=0;i<numbersArray.length;i++){

        if(numbersArray[i]%2==0){
            convertedArray.push(numbersArray[i]+1);
        }
        else{
            convertedArray.push(numbersArray[i]);
        }
    }
    console.log("Array with Even numbers converted to nearest odd: ",convertedArray);
}
convertEvenToOdd();
// Array with Even numbers converted to nearest odd:  [ 23, 35, 19, 47, 51, 63 ]


function findSmallestNumber(numbers){

    let smallestNumber=numbers[0];
    
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]<smallestNumber){
            
            smallestNumber=numbers[i];
            console.log(numbers)
        }
    }
    console.log("Smallest number is : ",smallestNumber);
}
findSmallestNumber(numbersArray);
// Smallest number is :  18