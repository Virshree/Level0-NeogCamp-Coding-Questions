const studentsData = [
  {
    name: "Sarah",
    rollNo: 201,
    chemistry: 88,
    homeScience: 78,
    commerce: 92,
    physicalEducation: 90,
    moralScience: 85,
    totalMarks: 433,
    avgMarks: 86.6,
  },
  {
    name: "Michael",
    rollNo: 202,
    chemistry: 75,
    homeScience: 90,
    commerce: 85,
    physicalEducation: 94,
    moralScience: 88,
    totalMarks: 432,
    avgMarks: 86.4,
  },
  {
    name: "Emily",
    rollNo: 203,
    chemistry: 82,
    homeScience: 95,
    commerce: 88,
    physicalEducation: 92,
    moralScience: 90,
    totalMarks: 447,
    avgMarks: 89.4,
  },
  {
    name: "David",
    rollNo: 204,
    chemistry: 95,
    homeScience: 96,
    commerce: 94,
    physicalEducation: 99,
    moralScience: 99,
    totalMarks: 483,
    avgMarks: 96.6,
  },
  {
    name: "Olivia",
    rollNo: 205,
    chemistry: 85,
    homeScience: 92,
    commerce: 89,
    physicalEducation: 91,
    moralScience: 86,
    totalMarks: 443,
    avgMarks: 88.6,
  },
];

function getTopper(data){
    let highestMarks=data[0];
    for(let i=1;i<data.length;i++){
        if(data[i].totalMarks>highestMarks.totalMarks){
            highestMarks=data[i];
            // console.log(highestMarks);
        }
    }
    return highestMarks;
}

function getGrade(avg){

    if(avg>=95){
        return "A+";
    }
    else if(avg>=90){
        return "A";
    }
    else if(avg>=85){
        return "B+";
    }
    else if(avg>=80){
        return "B";
    }
    else if(avg>=75)
{
    return "C+";
}
    else if(avg>=70){
        return"C";
    }
    else if(avg>=65){
        return "D+";
    }
    else if(avg>=60){
        return "D";
    }
    else if(avg>=55){
        return "E";
    }
    else{
        return "F";
    }
}

function getGradeACount(){
    let count=0;

    for(let i=0;i<studentsData.length;i++){
        if(studentsData[i].avgMarks>=95){
            count=count+1;
        }
    }
    return count;
}

function getTotalMarksByClass(){
    let totalMarks=0;
    for(let i=0;i<studentsData.length;i++){

        totalMarks=studentsData[i].totalMarks+totalMarks;
    }
    return totalMarks;

}
function getAverageByClass(){
    let avg=0;
    for(let i=0;i<studentsData.length;i++){
        avg=studentsData[i].avgMarks+avg;
    }
    return avg;
}

function calculateSubjectAverage(data,subjectName){
    let totalMarks=0;

    for(let i=0;i<data.length;i++){
        totalMarks=data[i][subjectName]+totalMarks;
    }

    return totalMarks/data.length

}

function getClassPerformanceReport(studentsData) {

    let topper=getTopper(studentsData);
    let totalMarksByClass=getTotalMarksByClass(studentsData);
    let totalAverageByClass=getAverageByClass(studentsData);

    let averageChemistry=calculateSubjectAverage(studentsData,"chemistry")
    let averageHomeScience=calculateSubjectAverage(studentsData,"homeScience")
    let averageCommerce=calculateSubjectAverage(studentsData,"commerce")
    let averagePhysicalEducation=calculateSubjectAverage(studentsData,"physicalEducation")
    let averageMoralScience=calculateSubjectAverage(studentsData,"moralScience")


    console.log("====== Class Performance Report ========= \n");
    console.log("Topper: \n");
    console.log("Name: "+topper.name );
    console.log("Rollno: "+topper.rollNo );
    console.log("Total marks: "+topper.totalMarks );
    console.log("Grade: "+getGrade(topper.avgMarks) );
    console.log("A+ graders: \n")
    console.log("----------");
    console.log("Total no. of A+ graders: "+getGradeACount(topper.avgMarks));
    console.log("Name: "+topper.name);
    console.log("Total marks: "+topper.totalMarks);
    console.log("----------");
    console.log("Class Average: ");
    console.log("----------");
    console.log("Total Marks scored by Class:"+totalMarksByClass);
    console.log("Total Average of Class: "+totalAverageByClass);
    console.log("----------");
    console.log("Total Average of Chemistry: "+averageChemistry);
    console.log("Total Average of Home Science: "+averageHomeScience);
    console.log("Total Average of Commerce: "+averageCommerce);
    console.log("Total Average of Physical Education: "+averagePhysicalEducation);
    console.log("Total Average of Moral Science: "+averageMoralScience);
}   

getClassPerformanceReport(studentsData);

/*


====== Class Performance Report ========= 

Topper: 

Name: David
Rollno: 204
Total marks: 483
Grade: A+
A+ graders: 

----------
Total no. of A+ graders: 1
Name: David
Total marks: 483
----------
Class Average: 
----------
Total Marks scored by Class:2238
Total Average of Class: 447.6
----------
Total Average of Chemistry: 85
Total Average of Home Science: 90.2
Total Average of Commerce: 89.6
Total Average of Physical Education: 93.2
Total Average of Moral Science: 89.6
*/