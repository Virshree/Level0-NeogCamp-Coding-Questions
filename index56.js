//Assignment A5

//1.1

let movieDetails = [
  {
    name: "Kabhi Khushi Kabhi Gham",
    genre: "Drama",
    boxOffice: 500,
    satelliteRights: 120,
    OTTRights: 70,
    musicRights: 20,
  },
  {
    name: "Dilwale Dulhania Le Jayenge",
    genre: "Romance",
    boxOffice: 550,
    satelliteRights: 130,
    OTTRights: 80,
    musicRights: 25,
  },
  {
    name: "3 Idiots",
    genre: "Comedy",
    boxOffice: 600,
    satelliteRights: 140,
    OTTRights: 90,
    musicRights: 30,
  },
  {
    name: "Bajrangi Bhaijaan",
    genre: "Action",
    boxOffice: 700,
    satelliteRights: 160,
    OTTRights: 100,
    musicRights: 40,
  },
  {
    name: "Padmaavat",
    genre: "Historical",
    boxOffice: 800,
    satelliteRights: 180,
    OTTRights: 110,
    musicRights: 45,
  },
];

console.log(movieDetails);
/*
[
    {
      name: 'Kabhi Khushi Kabhi Gham',
      genre: 'Drama',
      boxOffice: 500,
      satelliteRights: 120,
      OTTRights: 70,
      musicRights: 20
    },
    {
      name: 'Dilwale Dulhania Le Jayenge',
      genre: 'Romance',
      boxOffice: 550,
      satelliteRights: 130,
      OTTRights: 80,
      musicRights: 25
    },
    {
      name: '3 Idiots',
      genre: 'Comedy',
      boxOffice: 600,
      satelliteRights: 140,
      OTTRights: 90,
      musicRights: 30
    },
    {
      name: 'Bajrangi Bhaijaan',
      genre: 'Action',
      boxOffice: 700,
      satelliteRights: 160,
      OTTRights: 100,
      musicRights: 40
    },
    {
      name: 'Padmaavat',
      genre: 'Historical',
      boxOffice: 800,
      satelliteRights: 180,
      OTTRights: 110,
      musicRights: 45
    }
  ]

*/

/*
## 1.2

In the array above, calculate total cost for each movie. Add that field to 
every object in the array. 
Print the array to the console.
*/

for (let i = 0; i < movieDetails.length; i++) {
  let totalCost = 0;

  totalCost =
    movieDetails[i].boxOffice +
    movieDetails[i].OTTRights +
    movieDetails[i].musicRights +
    movieDetails[i].satelliteRights +
    totalCost;

  movieDetails[i].totalCost = totalCost;

  console.log(totalCost);
}

console.log("Array with total cost",movieDetails);

/*

Array with total cost [
  {
    name: 'Kabhi Khushi Kabhi Gham',
    genre: 'Drama',
    boxOffice: 500,
    satelliteRights: 120,
    OTTRights: 70,
    musicRights: 20,
    totalCost: 710
  },
  {
    name: 'Dilwale Dulhania Le Jayenge',
    genre: 'Romance',
    boxOffice: 550,
    satelliteRights: 130,
    OTTRights: 80,
    musicRights: 25,
    totalCost: 785
  },
  {
    name: '3 Idiots',
    genre: 'Comedy',
    boxOffice: 600,
    satelliteRights: 140,
    OTTRights: 90,
    musicRights: 30,
    totalCost: 860
  },
  {
    name: 'Bajrangi Bhaijaan',
    genre: 'Action',
    boxOffice: 700,
    satelliteRights: 160,
    OTTRights: 100,
    musicRights: 40,
    totalCost: 1000
  },
  {
    name: 'Padmaavat',
    genre: 'Historical',
    boxOffice: 800,
    satelliteRights: 180,
    OTTRights: 110,
    musicRights: 45,
    totalCost: 1135
  }
]

*/

/*
1.3
Generate cost card for each movie and print to the console.*/

function generateMovieCostCard() {
  let costReport = "===== Movie Cost Card =====  \n";

  for (let i = 0; i < movieDetails.length; i++) {
    costReport += "Name: " + movieDetails[i].name + "\n";
    costReport += "Genre: " + movieDetails[i].genre + "\n";
    costReport += "Total Cost:" + movieDetails[i].totalCost + "\n";
    costReport += "-----------\n";
  }
  return costReport;
}
console.log(generateMovieCostCard(movieDetails));

/*
===== Movie Cost Card =====  
Name: Kabhi Khushi Kabhi Gham
Genre: Drama
Total Cost:710
-----------
Name: Dilwale Dulhania Le Jayenge
Genre: Romance
Total Cost:785
-----------
Name: 3 Idiots
Genre: Comedy
Total Cost:860
-----------
Name: Bajrangi Bhaijaan
Genre: Action
Total Cost:1000
-----------
Name: Padmaavat
Genre: Historical
Total Cost:1135
-----------
*/

/*## 1.4

Generate Movie Report for all the movies*/

function getMostExpensiveMovie(data) {
  let expensiveCost = data[0];

  for (let i = 1; i < data.length; i++) {
    if (data[i].totalCost > expensiveCost.totalCost) {
      expensiveCost = data[i];
    }
  }
  return expensiveCost;
}

function getTotalCostMovie() {
  let totalCostMovie = 0;

  for (let i = 0; i < movieDetails.length; i++) {
    totalCostMovie = totalCostMovie + movieDetails[i].totalCost;
  }
  return totalCostMovie;
}

function calculateAllMovieCostAverage(data, movieCost) {
  let totalAvg = 0;

  for (let i = 0; i < data.length; i++) {
    totalAvg = totalAvg + data[i][movieCost];
  }
  return totalAvg / data.length;
}
function getMovieReport() {
  let movieReport = "====== Movie Report ===== \n  ";
  let expensiveMovie = getMostExpensiveMovie(movieDetails);
  let totalCostMovie = getTotalCostMovie(movieDetails);

  let boxOfficeAverage = calculateAllMovieCostAverage(
    movieDetails,
    "boxOffice"
  );
  let satelliteRightsAverage = calculateAllMovieCostAverage(
    movieDetails,
    "satelliteRights"
  );
  let ottRightsAverage = calculateAllMovieCostAverage(
    movieDetails,
    "OTTRights"
  );
  let musicRightsAverage = calculateAllMovieCostAverage(
    movieDetails,
    "musicRights"
  );

  movieReport += "Most Expensive Movie \n ";
  movieReport += "-------------\n";
  movieReport += "Name: " + expensiveMovie.name + "\n";
  movieReport += "Genre: " + expensiveMovie.genre + "\n";
  movieReport += "Total Cost: " + expensiveMovie.totalCost + "\n";

  movieReport + "Movie Averages \n";
  movieReport += "-------------\n";

  movieReport += "Total Cost of All Movies: " + totalCostMovie + "\n";
  movieReport +=
    "Total Average Cost of all movies:" +
    totalCostMovie / movieDetails.length +
    "\n";
  movieReport += "-------------\n";

  movieReport += "Total Box Office Average: " + boxOfficeAverage + "\n";
  movieReport +=
    "Total Satellite Rights Average: " + satelliteRightsAverage + "\n";
  movieReport += "Total OTT Average:" + ottRightsAverage + "\n";
  movieReport += "Total Music Rights Average:" + musicRightsAverage + "\n";

  return movieReport;
}

console.log(getMovieReport(movieDetails));

/*

====== Movie Report ===== 
  Most Expensive Movie 
 -------------
Name: Padmaavat
Genre: Historical
Total Cost: 1135
-------------
Total Cost of All Movies: 4490
Total Average Cost of all movies:898
-------------
Total Box Office Average: 630
Total Satellite Rights Average: 146
Total OTT Average:90
Total Music Rights Average:32

*/
