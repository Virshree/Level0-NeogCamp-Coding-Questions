const productsData = [
  {
    id: 101,
    name: "Laptop",
    price: 999.99,
    brand: "Dell",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 102,
    name: "Smartphone",
    price: 599.99,
    brand: "Samsung",
    category: "Electronics",
    rating: 4.0,
  },
  {
    id: 103,
    name: "Running Shoes",
    price: 79.99,
    brand: "Nike",
    category: "Footwear",
    rating: 4.8,
  },
  {
    id: 104,
    name: "T-shirt",
    price: 19.99,
    brand: "Adidas",
    category: "Apparel",
    rating: 4.2,
  },
  {
    id: 105,
    name: "Coffee Maker",
    price: 49.99,
    brand: "Hamilton",
    category: "Kitchen Appliances",
    rating: 4.6,
  },
];

function getProductName(data) {
  //highest price -name;
  let highestPrice = data[0];

  for (let i = 1; i < data.length; i++) {
    if (data[i].price > highestPrice.price) {
      highestPrice = data[i];
    }
  }
  return highestPrice;
}
function getProductTotal() {
  let count = 0;

  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].category == "Electronics") {
      count = count + 1;
    }
  }
  return count;
}

function getProductAvgPrice() {
  let avg = 0;

  for (let i = 0; i < productsData.length; i++) {
    avg = avg + productsData[i].price;
  }
  return avg / productsData.length;
}

function getProductAvgRatings() {
  let rating = 0;

  for (let i = 0; i < productsData.length; i++) {
    rating = rating + productsData[i].rating;
  }
  return rating / productsData.length;
}

function getProductWithHighRating(data) {
  let highRating = data[0];

  for (let i = 1; i < data.length; i++) {
    if (productsData[i].rating > highRating.rating) {
      highRating = productsData[i];
    }
  }
  return highRating;
}

//product analysis

function getProductAnalysisDetails(productsData) {
  let product = getProductName(productsData);
  let productRating = getProductWithHighRating(productsData);

  let reportAnalysis = "======= Product Analysis =======    " + "\n";

  reportAnalysis += "Most Expensive Product Details " + "\n";
  reportAnalysis += " " + "\n";

  reportAnalysis += "-----------" + "\n";
  reportAnalysis += "Name:" + product.name + "\n";

  reportAnalysis += "Price: $" + product.price + "\n";
  reportAnalysis += "Brand: " + product.brand + "\n";
  reportAnalysis += "Category: " + product.category + "\n";
  reportAnalysis += "Rating: " + product.rating + "\n";
  reportAnalysis += "-----------" + "\n";
  reportAnalysis += "Totals and Averages" + "\n";
  reportAnalysis += "-----------" + "\n";
  reportAnalysis +=
    "Total Electronics products: " + getProductTotal(product.category) + "\n";
  reportAnalysis +=
    "Average Price:  $" + getProductAvgPrice(product.price) + "\n";
  reportAnalysis +=
    "Average Ratings: " + getProductAvgRatings(product.rating) + "\n";
  reportAnalysis += "-----------" + "\n";

  reportAnalysis += "Product with Highest Rating: " + "\n";
  reportAnalysis += "Name: " + productRating.name + "\n";

  reportAnalysis += "Price: $" + productRating.price + "\n";

  reportAnalysis += "Brand: " + productRating.brand + "\n";

  reportAnalysis += "Category: " + productRating.category + "\n";

  reportAnalysis += "Rating: " + productRating.rating + "\n";

  reportAnalysis += "-----------\n";
  reportAnalysis += "  \n";
  reportAnalysis += "Products with Price Less Than $50:" + "\n";

  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].price < 50) {
      reportAnalysis += "Name: " + productsData[i].name + "\n";
      reportAnalysis += "Price: $" + productsData[i].price + "\n";
      reportAnalysis += "Brand: " + productsData[i].brand + "\n";
      reportAnalysis += "Category: " + productsData[i].category + "\n";
      reportAnalysis += "Rating: " + productsData[i].rating + "\n";
      reportAnalysis += "-----------\n";
    }
  }

  return reportAnalysis;
}
console.log(getProductAnalysisDetails(productsData));

/*

======= Product Analysis =======    
Most Expensive Product Details 
 
-----------
Name:Laptop
Price: $999.99
Brand: Dell
Category: Electronics
Rating: 4.5
-----------
Totals and Averages
-----------
Total Electronics products: 2
Average Price:  $349.99
Average Ratings: 4.42
-----------
Product with Highest Rating: 
Name: Running Shoes
Price: $79.99
Brand: Nike
Category: Footwear
Rating: 4.8
-----------
  
Products with Price Less Than $50:
Name: T-shirt
Price: $19.99
Brand: Adidas
Category: Apparel
Rating: 4.2
-----------
Name: Coffee Maker
Price: $49.99
Brand: Hamilton
Category: Kitchen Appliances
Rating: 4.6
-----------

*/
