//Scores of 4 match played batsman

//array of objects

let batsmanData = [
  {
    name: "Virat",
    EdenGardens: 72,
    WankhedeStadium: 88,
    FerozShahKotla: 45,
    Chepauk: 74,
  },
  {
    name: "Rohit",
    EdenGardens: 64,
    WankhedeStadium: 41,
    FerozShahKotla: 68,
    Chepauk: 34,
  },
  {
    name: "Shikhar",
    EdenGardens: 54,
    WankhedeStadium: 38,
    FerozShahKotla: 72,
    Chepauk: 44,
  },
  {
    name: "Rishabh",
    EdenGardens: 22,
    WankhedeStadium: 27,
    FerozShahKotla: 34,
    Chepauk: 51,
  },
];

for(let i=0;i<batsmanData.length;i++){
    console.log("Cricketer:"+batsmanData[i].name);
    console.log("Eden Gardens: "+batsmanData[i].EdenGardens);
    console.log("Wankhede Stadiums: "+batsmanData[i].WankhedeStadium);
    console.log("Feroz Shah Kotla: "+batsmanData[i].FerozShahKotla);
    console.log("Chepauk: "+batsmanData[i].Chepauk);
    console.log("\n");
}

/*

Cricketer: Virat
Eden Gardens: 72
Wankhede Stadium: 88
Feroz Shah Kotla: 45
Chepauk: 74


Cricketer: Rohit
Eden Gardens: 64
Wankhede Stadium: 41
Feroz Shah Kotla: 68
Chepauk: 34


Cricketer: Shikhar
Eden Gardens: 54
Wankhede Stadium: 38
Feroz Shah Kotla: 72
Chepauk: 44


Cricketer: Rishabh
Eden Gardens: 22
Wankhede Stadium: 27
Feroz Shah Kotla: 34
Chepauk: 51
*/
/****************************************** */
//adding chinnaswamyStadiumScores to all cricketers data

const chinnaswamyStadiumScores = [54, 82, 49, 45];

for (let i = 0; i < batsmanData.length; i++) {
  batsmanData[i].chinnaswamyStadium = chinnaswamyStadiumScores[i];

  // console.log(batsmanData[i]);
}
/****************************************** */

// 2.2 Add KL Rahul’s data to our cricketerScores and print the whole array of objects once.
const updateRahulData = {
  name: "KL Rahul",
  EdenGardens: 34,
  WankhedeStadium: 56,
  FerozShahKotla: 42,
  Chepauk: 31,
  chinnaswamyStadium: 68,
};

batsmanData.push(updateRahulData);
console.log("Updated KL Rahul Data: ",batsmanData);
/*
Updated KL Rahul Data:  {
    name: 'KL Rahul',
    EdenGardens: 34,
    WankhedeStadium: 56,
    FerozShahKotla: 42,
    Chepauk: 31,
    chinnaswamyStadium: 68
  }*/
/****************************************** */

//   2.3 Add a field `totalScore` to every object in the array. Calculate the total score for each cricketer and update the field with it. Then print the updated array.

for (let i = 0; i < batsmanData.length; i++) {
  let totalScore =
    batsmanData[i].EdenGardens +
    batsmanData[i].WankhedeStadium +
    batsmanData[i].FerozShahKotla +
    batsmanData[i].Chepauk +
    batsmanData[i].chinnaswamyStadium;

  batsmanData[i].totalScore = totalScore;
}
 console.log("Updated array with total score: ",batsmanData);
/****************************************** */

// 2.4 Using the total score field, now calculate the average score of the cricketer.  Add this field avgScore to each object in the array. Print the updated array.

for (let i = 0; i < batsmanData.length; i++) {
  let noofstadium = 5;
  let average = batsmanData[i].totalScore / noofstadium;
  batsmanData[i].avgScore = average;
}
 console.log("Cricketer Data: ",batsmanData);

/*
Cricketer Data:  [
  {
    name: 'Virat',
    EdenGardens: 72,
    WankhedeStadium: 88,
    FerozShahKotla: 45,
    Chepauk: 74,
    chinnaswamyStadium: 54,
    totalScore: 333,
    avgScore: 66.6
  },
  {
    name: 'Rohit',
    EdenGardens: 64,
    WankhedeStadium: 41,
    FerozShahKotla: 68,
    Chepauk: 34,
    chinnaswamyStadium: 82,
    totalScore: 289,
    avgScore: 57.8
  },
  {
    name: 'Shikhar',
    EdenGardens: 54,
    WankhedeStadium: 38,
    FerozShahKotla: 72,
    Chepauk: 44,
    chinnaswamyStadium: 49,
    totalScore: 257,
    avgScore: 51.4
  },
  {
    name: 'Rishabh',
    EdenGardens: 22,
    WankhedeStadium: 27,
    FerozShahKotla: 34,
    Chepauk: 51,
    chinnaswamyStadium: 45,
    totalScore: 179,
    avgScore: 35.8
  },
  {
    name: 'KL Rahul',
    EdenGardens: 34,
    WankhedeStadium: 56,
    FerozShahKotla: 42,
    Chepauk: 31,
    chinnaswamyStadium: 68,
    totalScore: 231,
    avgScore: 46.2
  }
]

*/

//Score card for each cricketers.

for (let i = 0; i < batsmanData.length; i++) {
  generateScoreCard(batsmanData[i]);
}
function generateScoreCard(cricketer) {
  console.log("===== Score Card for " + cricketer.name + " ======");
  console.log("Eden Gardens: " + cricketer.EdenGardens);
  console.log("Wankhede Stadium: " + cricketer.WankhedeStadium);
  console.log("Feroz Shah Kotla:" + cricketer.FerozShahKotla);
  console.log("Chepauk:" + cricketer.Chepauk);
  console.log("Chinnaswamy Stadium:", +cricketer.chinnaswamyStadium);
  console.log(" -----");
  console.log("Total :", +cricketer.totalScore);
  console.log("Average: ", +cricketer.avgScore);
  console.log("Performance: ", getScoreCard(cricketer.avgScore));
  console.log("\n");
}
function getScoreCard(gradesScore) {
  if (gradesScore >= 80) {
    return "Good";
  } else if (gradesScore > 60 && gradesScore < 79) {
    return "Above Average";
  } else if (gradesScore > 45 && gradesScore < 59) {
    return "Average";
  } else {
    return "Bad";
  }
}

/*
===== Score Card for Virat ======
Eden Gardens: 72
Wankhede Stadium: 88
Feroz Shah Kotla:45
Chepauk:74
Chinnaswamy Stadium: 54
 -----
Total : 333
Average:  66.6
Performance:  Above Average


===== Score Card for Rohit ======
Eden Gardens: 64
Wankhede Stadium: 41
Feroz Shah Kotla:68
Chepauk:34
Chinnaswamy Stadium: 82
 -----
Total : 289
Average:  57.8
Performance:  Average


===== Score Card for Shikhar ======
Eden Gardens: 54
Wankhede Stadium: 38
Feroz Shah Kotla:72
Chepauk:44
Chinnaswamy Stadium: 49
 -----
Total : 257
Average:  51.4
Performance:  Average


===== Score Card for Rishabh ======
Eden Gardens: 22
Wankhede Stadium: 27
Feroz Shah Kotla:34
Chepauk:51
Chinnaswamy Stadium: 45
 -----
Total : 179
Average:  35.8
Performance:  Bad


===== Score Card for KL Rahul ======
Eden Gardens: 34
Wankhede Stadium: 56
Feroz Shah Kotla:42
Chepauk:31
Chinnaswamy Stadium: 68
 -----
Total : 231
Average:  46.2
Performance:  Average



*/