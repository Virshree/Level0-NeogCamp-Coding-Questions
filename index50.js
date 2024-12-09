const productsData = [
    {
      id: 1,
      productName: "Laptop",
      price2021: 19999,
      price2022: 18999,
      price2023: 15090,
      brand: "Dell",
          productRating: 5
    },
    {
      id: 2,
      productName: "Smartphone",
      price2021: 18999,
      price2022: 17999,
      price2023: 16999,
      brand: "Samsung",
          productRating: 4
    },
    {
      id: 3,
      productName: "Smartwatch",
      price2021: 36999,
      price2022: 32999,
      price2023: 29999,
      brand: "Apple", 
          productRating: 4
    }
  ];

//function to take id and print the details for that product.

function printProductDetailsById(id){
        
    for(let i=0;i<productsData.length;i++){
        if(productsData[i].id==id)
        {
            return productsData[i];
          

        }
    }
}


function printProductDetails(id){
let product=printProductDetailsById(id);
// console.log(product);

console.log("===== Details Card for "+product.productName +" =====");
console.log("ID: "+product.id);
console.log("----------");
console.log("Details:   ");
console.log("-----------");
console.log("Product name: "+product.productName);
console.log("Price in 2021: "+product.price2021 );
console.log("Price in 2022: "+product.price2022);
console.log("Price in 2023: "+product.price2023 );
console.log("Brand: "+product.brand);
console.log("Rating: "+product.productRating);
console.log("\n");

}
// printProductDetails(1);
// printProductDetails(2);
// printProductDetails(3);


/*

===== Details Card for Laptop =====
ID: 1
----------
Details:   
-----------
Product name: Laptop
Price in 2021: 19999
Price in 2022: 18999
Price in 2023: 15090
Brand: Dell
Rating: 5


===== Details Card for Smartphone =====
ID: 2
----------
Details:   
-----------
Product name: Smartphone
Price in 2021: 18999
Price in 2022: 17999
Price in 2023: 16999
Brand: Samsung
Rating: 4


===== Details Card for Smartwatch =====
ID: 3
----------
Details:   
-----------
Product name: Smartwatch
Price in 2021: 36999
Price in 2022: 32999
Price in 2023: 29999
Brand: Apple
Rating: 4

*/


function getProductDetailsByPrice(yearPrice,minimumPrice){
    let result=[];
    for(let i=0;i<productsData.length;i++){
        if(productsData[i][yearPrice]>=minimumPrice){
            // return
        result.push( productsData[i]);
        }
    }
    return result;
}

// console.log("Products with price 2021 >=25000");
// console.log(getProductDetailsByPrice("price2021",25000));
// console.log("Products with price 2023 >=16000");
// console.log(getProductDetailsByPrice("price2023",16000));


/*
Products with price 2021 >=25000
[
  {
    id: 3,
    productName: 'Smartwatch',
    price2021: 36999,
    price2022: 32999,
    price2023: 29999,
    brand: 'Apple',
    productRating: 4
  }
]
Products with price 2023 >=16000
[
  {
    id: 2,
    productName: 'Smartphone',
    price2021: 18999,
    price2022: 17999,
    price2023: 16999,
    brand: 'Samsung',
    productRating: 4
  },
  {
    id: 3,
    productName: 'Smartwatch',
    price2021: 36999,
    price2022: 32999,
    price2023: 29999,
    brand: 'Apple',
    productRating: 4
  }
]
*/
for(let i=0;i<productsData.length;i++){

  let total;
  let noofYears=3;

  total=productsData[i].price2021+productsData[i].price2022+productsData[i].price2023;
    productsData[i].totalPrice=total;
  productsData[i].avgPrice=productsData[i].totalPrice/noofYears;

  

}

//Function to take averagePrice cutoff(12000)



function calculateProductAvg(cutoff){
  

  for(let i=0;i<productsData.length;i++){

   

    if(productsData[i].avgPrice>cutoff){
      console.log("Average price of 3 years for  "+productsData[i].productName  +" is "+ productsData[i].avgPrice);

    }

  }
}
calculateProductAvg(12000);
/*
Average price of 3 years for  Laptop is 18029.333333333332
Average price of 3 years for  Smartphone is 17999
Average price of 3 years for  Smartwatch is 33332.333333333336*/


//function to take entire array  as data and return product object has highest avg price

function getHighestAvgpriceOfProduct(data){
  let highestAvgPrice=data[0].avgPrice;
  for(let i=1;i<data.length;i++){

    if(data[i].avgPrice>highestAvgPrice){
      highestAvgPrice=data[i].avgPrice;
      // console.log(highestAvgPrice)
      console.log("Product with Highest avg price: "+productsData[i].productName +" - "+highestAvgPrice);

      }
  }
  return highestAvgPrice
}
getHighestAvgpriceOfProduct(productsData);
// Product with Highest avg price: Smartwatch - 33332.333333333336

