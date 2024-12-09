//arrays

let cities=["New York","London","Tokyo"];

console.log(cities);
// [ 'New York', 'London', 'Tokyo' ]
// console.log(cities[1]);
// London

 console.log(cities.length);//3

console.log(cities[2]);//Tokyo

for(let i=0;i<cities.length;i++){

     console.log(cities[i]);
}
// New York
// London
// Tokyo

cities.push("Paris");

console.log("Updated number of cities:  ",cities.length);//4

console.log(cities);[ 'New York', 'London', 'Tokyo', 'Paris' ]

const favoriteBooks = ["To Kill a Mockingbird", "Pride and Prejudice", "1984", "The Great Gatsby"];

console.log(favoriteBooks);
[
    'To Kill a Mockingbird',
    'Pride and Prejudice',
    '1984',
    'The Great Gatsby'
  ]

console.log(favoriteBooks[1]);//Pride and Prejudice

console.log(favoriteBooks.length);//4

console.log(favoriteBooks[favoriteBooks.length-1]);//The Great Gatsby

favoriteBooks.push("Harry Potter and the Sorcerer's Stone");

console.log("Updated number of books",favoriteBooks.length);//5
console.log(favoriteBooks);

// [
//     'To Kill a Mockingbird',
//     'Pride and Prejudice',
//     '1984',
//     'The Great Gatsby',
//     "Harry Potter and the Sorcerer's Stone"
//   ]


// Top Music Artists

const topIndianArtists = ["Arijit Singh", "Neha Kakkar", "Badshah", "Shreya Ghoshal"];


console.log(topIndianArtists);
// [ 'Arijit Singh', 'Neha Kakkar', 'Badshah', 'Shreya Ghoshal' ]

console.log(topIndianArtists[2]);Badshah

console.log(topIndianArtists.length);//4

for(let i=0;i<topIndianArtists.length;i++){

    console.log(topIndianArtists[i]);
}
console.log(topIndianArtists[topIndianArtists.length-1]);//Shreya Ghoshal

topIndianArtists.push("Amit Trivedi");

console.log("Updated array list :",topIndianArtists);

// Updated array list : [
//     'Arijit Singh',
//     'Neha Kakkar',
//     'Badshah',
//     'Shreya Ghoshal',
//     'Amit Trivedi'
//   ]

console.log("Updated total number of artists:",topIndianArtists.length)//5