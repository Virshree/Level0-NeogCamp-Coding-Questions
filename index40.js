let numberArray=[5,12,7,25,18,3];

function printOriginalArray(){
    console.log("Original array:",numberArray);
}
// printOriginalArray();
// Original array: [ 5, 12, 7, 25, 18, 3 ]


function add10ToArray(){
let newArray=[];
    for(let i=0;i<numberArray.length;i++){
    
        newArray.push(10+numberArray[i]);
    }
   console.log("New array: ",newArray);
}
// add10ToArray();

// New array:  [ 15, 22, 17, 35, 28, 13 ]

function convertedOddtoEven(){
    
    let convertedArray=[];

    for(let i=0;i<numberArray.length;i++){
        if(numberArray[i]%2!=0){
            convertedArray.push(numberArray[i]+1);
        }
        else{
            convertedArray.push(numberArray[i]);
        }
    }
    return convertedArray;
}

console.log(convertedOddtoEven());
// [ 6, 12, 8, 26, 18, 4 ]

function printLargestNumber(numbers){
  let largestNumber=numbers[0];  
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>largestNumber){
            largestNumber=numbers[i];
     
        }
       
        }

        return largestNumber;
    }

// printLargestNumber();
console.log(printLargestNumber(numberArray));

//25

