//FOOD TRACKER CALORIES INTAKE

let foodTracker=[{
    day:"Monday",
    Breakkfast:300,
    Lunch:300,
    Snacks:150,
    Dinner:500
},
{
    day:"Tuesday",
    Breakkfast:250,
    Lunch:450,
    Snacks:200,
    Dinner:550
},
{
    day:"Wednesday",
    Breakkfast:350,
    Lunch:550,
    Snacks:100,
    Dinner:700
},
{
    day:"Thursday",
    Breakkfast:400,
    Lunch:600,
    Snacks:180,
    Dinner:650
},{
    day:"Friday",
    Breakkfast:280,
    Lunch:480,
    Snacks:120,
    Dinner:580
},{
    day:"Saturday",
    Breakkfast:320,
    Lunch:520,
    Snacks:160,
    Dinner:620
}];

for(let i=0;i<foodTracker.length;i++){
    console.log("Day: ",foodTracker[i].day);
    console.log("Breakfast: ",foodTracker[i].Breakkfast);
    console.log("Lunch: ",foodTracker[i].Lunch);
    console.log("Snacks: ",foodTracker[i].Snacks);
    console.log("Dinner: ",foodTracker[i].Dinner);
    console.log("\n")
}
/*
Day:  Monday
Breakfast:  300
Lunch:  300
Snacks:  150
Dinner:  500


Day:  Tuesday
Breakfast:  250
Lunch:  450
Snacks:  200
Dinner:  550


Day:  Wednesday
Breakfast:  350
Lunch:  550
Snacks:  100
Dinner:  700


Day:  Thursday
Breakfast:  400
Lunch:  600
Snacks:  180
Dinner:  650


Day:  Friday
Breakfast:  280
Lunch:  480
Snacks:  120
Dinner:  580


Day:  Saturday
Breakfast:  320
Lunch:  520
Snacks:  160
Dinner:  620
*/
// 1.2 Use for-loops to add the calories of mid afternoon snack for every day. Here are the calories given in an array. 
const midAfternoonCalories = [100, 120, 105, 110, 100, 130]

for(let i=0;i<foodTracker.length;i++){

    foodTracker[i].midAfternoon=midAfternoonCalories[i];
    console.log(foodTracker[i]);
}
/*
{
    day: 'Monday',
    Breakkfast: 300,
    Lunch: 300,
    Snacks: 150,
    Dinner: 500,
    midAfternoon: 100
  }
  {
    day: 'Tuesday',
    Breakkfast: 250,
    Lunch: 450,
    Snacks: 200,
    Dinner: 550,
    midAfternoon: 120
  }
  {
    day: 'Wednesday',
    Breakkfast: 350,
    Lunch: 550,
    Snacks: 100,
    Dinner: 700,
    midAfternoon: 105
  }
  {
    day: 'Thursday',
    Breakkfast: 400,
    Lunch: 600,
    Snacks: 180,
    Dinner: 650,
    midAfternoon: 110
  }
  {
    day: 'Friday',
    Breakkfast: 280,
    Lunch: 480,
    Snacks: 120,
    Dinner: 580,
    midAfternoon: 100
  }
  {
    day: 'Saturday',
    Breakkfast: 320,
    Lunch: 520,
    Snacks: 160,
    Dinner: 620,
    midAfternoon: 130
  }
  */


//   2.1 Convert this table to an object first and print it.

let updateIntakeSunday={
    day:"Sunday",
    Breakkfast:370,
    Lunch:430,
    Snacks:140,
    Dinner:530,
    midAfternoon:150
}

 console.log(updateIntakeSunday);
/*
{
    day: 'Sunday',
    Breakkfast: 370,
    Lunch: 430,
    Snacks: 140,
    Dinner: 530,
    midAfternoon: 150
  }*/

foodTracker.push(updateIntakeSunday);

 console.log("Updated array: ",foodTracker);
/*
Updated array:  [
    {
      day: 'Monday',
      Breakkfast: 300,
      Lunch: 300,
      Snacks: 150,
      Dinner: 500,
      midAfternoon: 100
    },
    {
      day: 'Tuesday',
      Breakkfast: 250,
      Lunch: 450,
      Snacks: 200,
      Dinner: 550,
      midAfternoon: 120
    },
    {
      day: 'Wednesday',
      Breakkfast: 350,
      Lunch: 550,
      Snacks: 100,
      Dinner: 700,
      midAfternoon: 105
    },
    {
      day: 'Thursday',
      Breakkfast: 400,
      Lunch: 600,
      Snacks: 180,
      Dinner: 650,
      midAfternoon: 110
    },
    {
      day: 'Friday',
      Breakkfast: 280,
      Lunch: 480,
      Snacks: 120,
      Dinner: 580,
      midAfternoon: 100
    },
    {
      day: 'Saturday',
      Breakkfast: 320,
      Lunch: 520,
      Snacks: 160,
      Dinner: 620,
      midAfternoon: 130
    },
    {
      day: 'Sunday',
      Breakkfast: 370,
      Lunch: 430,
      Snacks: 140,
      Dinner: 530,
      midAfternoon: 150
    }
  ]*/


for(let i=0;i<foodTracker.length;i++){
    let totalCal=foodTracker[i].Breakkfast+foodTracker[i].Lunch+foodTracker[i].Snacks+foodTracker[i].Dinner+foodTracker[i].midAfternoon;
    foodTracker[i].totalCalorie=totalCal;
}
console.log("Updated array with total calories: ",foodTracker);

/*

Updated array with total calories:  [
  {
    day: 'Monday',
    Breakkfast: 300,
    Lunch: 300,
    Snacks: 150,
    Dinner: 500,
    midAfternoon: 100,
    totalCalorie: 1350
  },
  {
    day: 'Tuesday',
    Breakkfast: 250,
    Lunch: 450,
    Snacks: 200,
    Dinner: 550,
    midAfternoon: 120,
    totalCalorie: 1570
  },
  {
    day: 'Wednesday',
    Breakkfast: 350,
    Lunch: 550,
    Snacks: 100,
    Dinner: 700,
    midAfternoon: 105,
    totalCalorie: 1805
  },
  {
    day: 'Thursday',
    Breakkfast: 400,
    Lunch: 600,
    Snacks: 180,
    Dinner: 650,
    midAfternoon: 110,
    totalCalorie: 1940
  },
  {
    day: 'Friday',
    Breakkfast: 280,
    Lunch: 480,
    Snacks: 120,
    Dinner: 580,
    midAfternoon: 100,
    totalCalorie: 1560
  },
  {
    day: 'Saturday',
    Breakkfast: 320,
    Lunch: 520,
    Snacks: 160,
    Dinner: 620,
    midAfternoon: 130,
    totalCalorie: 1750
  },
  {
    day: 'Sunday',
    Breakkfast: 370,
    Lunch: 430,
    Snacks: 140,
    Dinner: 530,
    midAfternoon: 150,
    totalCalorie: 1620
  }
]
*/

for(let i=0;i<foodTracker.length;i++){
    let noofCalories=5;
    let avg=foodTracker[i].totalCalorie/noofCalories;
    foodTracker[i].avgCalorie=avg;
     
}
 console.log("Updated array with avg calories: ",foodTracker);
/*
Updated array with avg calories:  [
    {
      day: 'Monday',
      Breakkfast: 300,
      Lunch: 300,
      Snacks: 150,
      Dinner: 500,
      midAfternoon: 100,
      totalCalorie: 1350,
      avgCalorie: 270
    },
    {
      day: 'Tuesday',
      Breakkfast: 250,
      Lunch: 450,
      Snacks: 200,
      Dinner: 550,
      midAfternoon: 120,
      totalCalorie: 1570,
      avgCalorie: 314
    },
    {
      day: 'Wednesday',
      Breakkfast: 350,
      Lunch: 550,
      Snacks: 100,
      Dinner: 700,
      midAfternoon: 105,
      totalCalorie: 1805,
      avgCalorie: 361
    },
    {
      day: 'Thursday',
      Breakkfast: 400,
      Lunch: 600,
      Snacks: 180,
      Dinner: 650,
      midAfternoon: 110,
      totalCalorie: 1940,
      avgCalorie: 388
    },
    {
      day: 'Friday',
      Breakkfast: 280,
      Lunch: 480,
      Snacks: 120,
      Dinner: 580,
      midAfternoon: 100,
      totalCalorie: 1560,
      avgCalorie: 312
    },
    {
      day: 'Saturday',
      Breakkfast: 320,
      Lunch: 520,
      Snacks: 160,
      Dinner: 620,
      midAfternoon: 130,
      totalCalorie: 1750,
      avgCalorie: 350
    },
    {
      day: 'Sunday',
      Breakkfast: 370,
      Lunch: 430,
      Snacks: 140,
      Dinner: 530,
      midAfternoon: 150,
      totalCalorie: 1620,
      avgCalorie: 324
    }
  ]*/

//calorie chart


for(let i=0;i<foodTracker.length;i++){

    generateCalorieChart(foodTracker[i]);
}

function generateCalorieChart(calories){

    console.log("===== Calorie Card for "+calories.day +" =====  ");
    console.log("Breakfast: ",calories.Breakkfast);
    console.log("Lunch: ",calories.Lunch);
    console.log("Snacks: ",calories.Snacks);
    console.log("Dinner: ",calories.Dinner);
    console.log("Mid Afternoon: ",calories.midAfternoon);
    console.log("--------");
    console.log("Total: ",calories.totalCalorie);
    console.log("Average: ",calories.avgCalorie);
    console.log("Comment: ",calculateCalories(calories.totalCalorie));
    console.log("\n");

}

function calculateCalories(comment){
    if(comment<=1550){
        return "Your calorie intake was within limits";
    }   
    else{
        return "Your calorie intake was higher than recommended";
    }
}

/*

===== Calorie Card for Monday =====  
Breakfast:  300
Lunch:  300
Snacks:  150
Dinner:  500
Mid Afternoon:  100
--------
Total:  1350
Average:  270
Comment:  Your calorie intake was within limits


===== Calorie Card for Tuesday =====  
Breakfast:  250
Lunch:  450
Snacks:  200
Dinner:  550
Mid Afternoon:  120
--------
Total:  1570
Average:  314
Comment:  Your calorie intake was higher than recommended


===== Calorie Card for Wednesday =====  
Breakfast:  350
Lunch:  550
Snacks:  100
Dinner:  700
Mid Afternoon:  105
--------
Total:  1805
Average:  361
Comment:  Your calorie intake was higher than recommended


===== Calorie Card for Thursday =====  
Breakfast:  400
Lunch:  600
Snacks:  180
Dinner:  650
Mid Afternoon:  110
--------
Total:  1940
Average:  388
Comment:  Your calorie intake was higher than recommended


===== Calorie Card for Friday =====  
Breakfast:  280
Lunch:  480
Snacks:  120
Dinner:  580
Mid Afternoon:  100
--------
Total:  1560
Average:  312
Comment:  Your calorie intake was higher than recommended


===== Calorie Card for Saturday =====  
Breakfast:  320
Lunch:  520
Snacks:  160
Dinner:  620
Mid Afternoon:  130
--------
Total:  1750
Average:  350
Comment:  Your calorie intake was higher than recommended


===== Calorie Card for Sunday =====  
Breakfast:  370
Lunch:  430
Snacks:  140
Dinner:  530
Mid Afternoon:  150
--------
Total:  1620
Average:  324
Comment:  Your calorie intake was higher than recommended


*/