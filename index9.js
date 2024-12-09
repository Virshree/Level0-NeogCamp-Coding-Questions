// **Movie Ticket Sales**

// Consider a cinema theater that sells tickets for Indian movies. Perform the following
// calculations to determine the total revenue and generate a ticket sales report:

// 1. Declare variables for the number of tickets sold and ticket prices for three Indian movies: 
//`movie1TicketsSold`, `movie2TicketsSold`, `movie3TicketsSold`, `movie1TicketPrice`, 
//`movie2TicketPrice`, and `movie3TicketPrice`.
//     - `movie1TicketsSold`: 150
//     - `movie2TicketsSold`: 120
//     - `movie3TicketsSold`: 80
//     - `movie1TicketPrice`: ₹250
//     - `movie2TicketPrice`: ₹180
//     - `movie3TicketPrice`: ₹150
// 2. Calculate the total revenue for each movie by multiplying the number of tickets sold 
//with the ticket price. Store the results in variables named `movie1Revenue`, `movie2Revenue`,
// and `movie3Revenue`.
// 3. Check if the revenue for each movie is more than ₹5000 by using a comparison operator.
// Store the results in variables named `isMovie1Superhit`, `isMovie2Superhit`, and 
//`isMovie3Superhit`.
// 4. Calculate the total revenue by adding the revenues of all three movies. Store the result 
//in a variable named `totalRevenue`.

// Print the following ticket sales report to the console:


let movie1TicketsSold=150;
let movie2TicketsSold=120;
let movie3TicketsSold=250;

let movie1TicketPrice=250;
let movie2TicketPrice=180;
let movie3TicketPrice=150;

let movie1Revenue=movie1TicketsSold*movie1TicketPrice;
let movie2Revenue=movie2TicketsSold*movie2TicketPrice;
let movie3Revenue=movie3TicketsSold*movie3TicketPrice;

let isMovie1Superhit=movie1Revenue>=5000;
let isMovie2Superhit=movie2Revenue>=5000;
let isMovie3Superhit=movie3Revenue>=5000;


let totalRevenue= movie1Revenue+movie2Revenue+movie3Revenue;

console.log(" Indian Movie Ticket Sales Report");
console.log("----------------------------------------------------------------")
console.log(" Movie 1: Dilwale Dulhania Le Jayenge")
console.log("- Tickets Sold: ",movie1TicketsSold);
console.log("- Ticket Price:  ₹",movie1TicketPrice);
console.log("- Revenue: ₹",movie1Revenue);
console.log("  Superhit :",isMovie1Superhit);


console.log(" Movie 2:Kabhi Khushi Kabhie Gham ")
console.log("- Tickets Sold: ",movie2TicketsSold);
console.log("- Ticket Price:  ₹",movie2TicketPrice);
console.log("- Revenue: ₹",movie2Revenue);
console.log("  Superhit :",isMovie2Superhit);

console.log(" Movie 3:3 Idiots ")
console.log("- Tickets Sold: ",movie3TicketsSold);
console.log("- Ticket Price:  ₹",movie3TicketPrice);
console.log("- Revenue: ₹",movie3Revenue);
console.log("  Superhit :",isMovie3Superhit);

console.log("Total Revenue : ₹",totalRevenue);

/*


 Indian Movie Ticket Sales Report
----------------------------------------------------------------
 Movie 1: Dilwale Dulhania Le Jayenge
- Tickets Sold:  150
- Ticket Price:  ₹ 250
- Revenue: ₹ 37500
  Superhit : true
 Movie 2:Kabhi Khushi Kabhie Gham 
- Tickets Sold:  120
- Ticket Price:  ₹ 180
- Revenue: ₹ 21600
  Superhit : true
 Movie 3:3 Idiots 
- Tickets Sold:  250
- Ticket Price:  ₹ 150
- Revenue: ₹ 37500
  Superhit : true
Total Revenue : ₹ 96600


*/