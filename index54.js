// A5_Exercise_1

//1.1
let salesPerson = [
  {
    name: "Rajesh",
    location: "Mumbai",
    q1Sales: 120000,
    q2Sales: 145000,
    q3Sales: 130000,
    q4Sales: 155000,
  },
  {
    name: "Sneha",
    location: "Delhi",
    q1Sales: 90000,
    q2Sales: 110000,
    q3Sales: 95000,
    q4Sales: 120000,
  },
  {
    name: "Arun",
    location: "Chennai",
    q1Sales: 100000,
    q2Sales: 125000,
    q3Sales: 115000,
    q4Sales: 135000,
  },
  {
    name: "Kavita",
    location: "Kolkata",
    q1Sales: 85000,
    q2Sales: 95000,
    q3Sales: 88000,
    q4Sales: 105000,
  },
  {
    name: "Sanjay",
    location: "Mumbai",
    q1Sales: 110000,
    q2Sales: 135000,
    q3Sales: 120000,
    q4Sales: 140000,
  },
  {
    name: "Divya",
    location: "Chennai",
    q1Sales: 95000,
    q2Sales: 120000,
    q3Sales: 110000,
    q4Sales: 130000,
  },
];

// console.log("SalesPerson array of objects :",salesPerson);

/*

SalesPerson array of objects : [
  {
    name: 'Rajesh',
    location: 'Mumbai',
    q1Sales: 120000,
    q2Sales: 145000,
    q3Sales: 130000,
    q4Sales: 155000
  },
  {
    name: 'Sneha',
    location: 'Delhi',
    q1Sales: 90000,
    q2Sales: 110000,
    q3Sales: 95000,
    q4Sales: 120000
  },
  {
    name: 'Arun',
    location: 'Chennai',
    q1Sales: 100000,
    q2Sales: 125000,
    q3Sales: 115000,
    q4Sales: 135000
  },
  {
    name: 'Kavita',
    location: 'Kolkata',
    q1Sales: 85000,
    q2Sales: 95000,
    q3Sales: 88000,
    q4Sales: 105000
  },
  {
    name: 'Sanjay',
    location: 'Mumbai',
    q1Sales: 110000,
    q2Sales: 135000,
    q3Sales: 120000,
    q4Sales: 140000
  },
  {
    name: 'Divya',
    location: 'Chennai',
    q1Sales: 95000,
    q2Sales: 120000,
    q3Sales: 110000,
    q4Sales: 130000
  }
]
*/

//1.2

//calculate avgSales and totalSales of salesPerson

for (let i = 0; i < salesPerson.length; i++) {
  let avgSales;
  let totalSales = 0;

  totalSales =
    totalSales +
    salesPerson[i].q1Sales +
    salesPerson[i].q2Sales +
    salesPerson[i].q3Sales +
    salesPerson[i].q4Sales;
  salesPerson[i].totalSales = totalSales;

  avgSales = salesPerson[i].totalSales / 4;
  salesPerson[i].averageSales = avgSales;
}
// console.log("Array with total sales and avg sales : ", salesPerson);

/*

Array with total sales and avg sales :  [
  {
    name: 'Rajesh',
    location: 'Mumbai',
    q1Sales: 120000,
    q2Sales: 145000,
    q3Sales: 130000,
    q4Sales: 155000,
    totalSales: 550000,
    averageSales: 137500
  },
  {
    name: 'Sneha',
    location: 'Delhi',
    q1Sales: 90000,
    q2Sales: 110000,
    q3Sales: 95000,
    q4Sales: 120000,
    totalSales: 415000,
    averageSales: 103750
  },
  {
    name: 'Arun',
    location: 'Chennai',
    q1Sales: 100000,
    q2Sales: 125000,
    q3Sales: 115000,
    q4Sales: 135000,
    totalSales: 475000,
    averageSales: 118750
  },
  {
    name: 'Kavita',
    location: 'Kolkata',
    q1Sales: 85000,
    q2Sales: 95000,
    q3Sales: 88000,
    q4Sales: 105000,
    totalSales: 373000,
    averageSales: 93250
  },
  {
    name: 'Sanjay',
    location: 'Mumbai',
    q1Sales: 110000,
    q2Sales: 135000,
    q3Sales: 120000,
    q4Sales: 140000,
    totalSales: 505000,
    averageSales: 126250
  },
  {
    name: 'Divya',
    location: 'Chennai',
    q1Sales: 95000,
    q2Sales: 120000,
    q3Sales: 110000,
    q4Sales: 130000,
    totalSales: 455000,
    averageSales: 113750
  }
]

*/


//1.3

//SALES Performance Report

function getSalesPersonPerformance(avg){
  
  if(avg>=140000){
    return "Top Performer"
  }
  else if(avg>=120000 && avg<140000){
    return "Medium Performer"
  }
  else{
    return "Low Performer";
  }
}
function getSalesPerformanceReport(salesPerson){

    
    let sales="===== Performance Report ===== \n";

    for(let i=0;i<salesPerson.length;i++){
  
      sales+="Name: "+salesPerson[i].name +"\n";
      sales+="Location: "+salesPerson[i].location +"\n";
      sales+="Total Sales: "+salesPerson[i].totalSales +"\n";
      sales+="Average Sales: "+salesPerson[i].averageSales +"\n";
      sales+="Performance Sales: "+getSalesPersonPerformance(salesPerson[i].averageSales) +"\n";
      sales+="---------\n";
      
    }
    return sales;
}


// console.log(getSalesPerformanceReport(salesPerson));

/*

===== Performance Report ===== 
Name: Rajesh
Location: Mumbai
Total Sales: 550000
Average Sales: 137500
Performance Sales: Medium Performer
---------
Name: Sneha
Location: Delhi
Total Sales: 415000
Average Sales: 103750
Performance Sales: Low Performer
---------
Name: Arun
Location: Chennai
Total Sales: 475000
Average Sales: 118750
Performance Sales: Low Performer
---------
Name: Kavita
Location: Kolkata
Total Sales: 373000
Average Sales: 93250
Performance Sales: Low Performer
---------
Name: Sanjay
Location: Mumbai
Total Sales: 505000
Average Sales: 126250
Performance Sales: Medium Performer
---------
Name: Divya
Location: Chennai
Total Sales: 455000
Average Sales: 113750
Performance Sales: Low Performer
---------

*/


//1.4

//Annual Sales Report

function getHighTotalSales(data){

   let  highTotalSales=data[0];

   for(let i=1;i<data.length;i++){
    if(data[i].totalSales>highTotalSales.totalSales){
      highTotalSales=data[i];
      // console.log(highTotalSales);
    }
   }
   return highTotalSales;
}

function getTopPerformerCount(){
let count=0;

  for(let i=0;i<salesPerson.length;i++){
    if(salesPerson[i].averageSales>=140000){
      count=count+1;
    }
  }
  return count;
}

function getAverageSales(data,quaterly)
{
  let totalSalesAvg=0;
  for(let i=0;i<data.length;i++){
    totalSalesAvg=totalSalesAvg+data[i][quaterly];
  }
  return totalSalesAvg/6;

}
function getTotalSales(){

  let totalSales=0;
  for(let i=0;i<salesPerson.length;i++){

    totalSales=totalSales+salesPerson[i].totalSales;
  }
  return totalSales;
}
function getTotalAvgSales(){
  let totalAvgSales=0;
  for(let i=0;i<salesPerson.length;i++){
    totalAvgSales=totalAvgSales+salesPerson[i].q1Sales+salesPerson[i].q2Sales+salesPerson[i].q3Sales+salesPerson[i].q4Sales;

    // console.log(totalAvgSales);
  }
  return totalAvgSales/6;
}
function getAnnualSalesReport(salesPerson){

  let highTotalSales=getHighTotalSales(salesPerson);
  let topPerfomerSales=getTopPerformerCount(salesPerson);

  let averageQ1Sales=getAverageSales(salesPerson,"q1Sales");
  let averageQ2Sales=getAverageSales(salesPerson,"q2Sales");
  let averageQ3Sales=getAverageSales(salesPerson,"q3Sales");
  let averageQ4Sales=getAverageSales(salesPerson,"q4Sales");

  let totalSales=getTotalSales(salesPerson);
  let totalAvgSales=getTotalAvgSales(salesPerson);

  let annualReport="===== Annual Sales Report =====  "+"\n";

  annualReport+="--------"+"\n";
  annualReport+="Best Performer"+"\n";
  annualReport+="--------"+"\n";

 
  annualReport+="Name: "+highTotalSales.name +"\n";
  annualReport+="Location: "+highTotalSales.location +"\n";
  annualReport+="Total Sales: "+highTotalSales.totalSales + "\n";

  annualReport+="--------"+"\n";
  annualReport+="Top Perfomers"+"\n";
  annualReport+="--------"+"\n";
  annualReport+="Total No. of Top Perfomers: "+topPerfomerSales +"\n";
  annualReport+="--------"+"\n";

  annualReport+="Sales Averages" +"\n";

  annualReport+="--------"+"\n";

  
  annualReport+="Q1 Average sales: "+averageQ1Sales +"\n";
  annualReport+="Q2 Average sales: "+averageQ2Sales +"\n";
  annualReport+="Q3 Average sales: "+averageQ3Sales +"\n";
  annualReport+="Q4 Average sales: "+averageQ4Sales +"\n"; 

  annualReport+="--------"+"\n";

  annualReport+="Total Sales: "+totalSales +"\n";

  annualReport+="Total Average Sales: "+totalAvgSales +"\n"
  return annualReport;
}

// console.log(getAnnualSalesReport(salesPerson));

/*

===== Annual Sales Report =====  
--------
Best Performer
--------
Name: Rajesh
Location: Mumbai
Total Sales: 550000
--------
Top Perfomers
--------
Total No. of Top Perfomers: 0
--------
Sales Averages
--------
Q1 Average sales: 100000
Q2 Average sales: 121666.66666666667
Q3 Average sales: 109666.66666666667
Q4 Average sales: 130833.33333333333
--------
Total Sales: 2773000
Total Average Sales: 462166.6666666667


*/


