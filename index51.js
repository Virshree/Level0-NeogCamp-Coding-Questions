const studentsData = [
  {
    name: "Rahul",
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
    computer: 88,
    science: 82,
    totalMarks: 415,
    avgMarks: 83,
  },
  {
    name: "Amit",
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
    computer: 92,
    science: 78,
    totalMarks: 420,
    avgMarks: 84,
  },
  {
    name: "Priya",
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
    computer: 95,
    science: 90,
    totalMarks: 442,
    avgMarks: 88.4,
  },
  {
    name: "Kaveri",
    rollNo: 104,
    hindi: 89,
    english: 95,
    maths: 96,
    computer: 98,
    science: 91,
    totalMarks: 469,
    avgMarks: 93.8,
  },
];

//class performance report

function getTopper(data) {
  let highestTopper = data[0];

  for (let i = 1; i < data.length; i++) {
    if (data[i].totalMarks > highestTopper.totalMarks) {
      highestTopper = data[i];
    }
  }
  return highestTopper;
}

function getGrade(avg) {
  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else if (avg >= 50) {
    return "E";
  } else {
    return "F";
  }
}

function getAGradeCount(avg) {
  let count = 0;
  if (avg >= 90) {
    count = count + 1;
  }
  return count;
}

function getTotalMarksScoredByClass(data) {
  let totalMarksClass = 0;
  for (let i = 0; i < data.length; i++) {
    totalMarksClass = totalMarksClass + data[i].totalMarks;
  }
  return totalMarksClass;
}

function getTotalAvgScoredByClass(data) {
  let totalAvgMarksClass = 0;
  for (let i = 0; i < data.length; i++) {
    totalAvgMarksClass = totalAvgMarksClass + data[i].avgMarks;
  }
  return totalAvgMarksClass;
}

function calculateSubjectAverage(data, sujectName) {
  let totalMarks = 0;

  for (let i = 0; i < data.length; i++) {
    totalMarks = totalMarks + data[i][sujectName];
  }
  return totalMarks / data.length;
}
function generateClassPerformanceReport(studentsData) {
  let topper = getTopper(studentsData);

  let totalMarksScoredByClass = getTotalMarksScoredByClass(studentsData);
  let totalAvgScoredByClass = getTotalAvgScoredByClass(studentsData);

  let hindiAverage = calculateSubjectAverage(studentsData, "hindi");
  let mathsAverage = calculateSubjectAverage(studentsData, "maths");
  let englishAverage = calculateSubjectAverage(studentsData, "english");
  let scienceAverage = calculateSubjectAverage(studentsData, "science");
  let computerAverage = calculateSubjectAverage(studentsData, "computer");

  let report = "========= Class performance report ==============\n";

  report += "Topper\n";
  report += "--------\n";
  report += "Name:  " + topper.name + "\n";
  report += "Rollno: " + topper.rollNo + "\n";
  report += "Total marks: " + topper.totalMarks + "\n";
  report += "Grade: " + getGrade(topper.avgMarks) + "\n";
  report += "A graders: \n";
  report += "-----------\n";
  report += "Total no. of A graders: " + getAGradeCount(topper.avgMarks) + "\n";

  for (let i = 0; i < studentsData.length; i++) {
    if (studentsData[i].avgMarks >= 90) {
      report += "Name: " + topper.name + "\n";
      report += "Total marks: " + topper.totalMarks + "\n";
    }
  }

  report += "------------\n";
  report += "Class average: \n";
  report += "------------\n";
  report += "Total Marks scored by Class : " + totalMarksScoredByClass + "\n";
  report += "Total Average of class :" + totalAvgScoredByClass + "\n";
  report += "-------------\n";
  report += "Total Average of Hindi: " + hindiAverage + "\n";
  report += "Total Average of Maths: " + mathsAverage + "\n";
  report += "Total Average of English: " + englishAverage + "\n";
  report += "Total Average of Science: " + scienceAverage + "\n";
  report += "Total Average of Computers: " + computerAverage + "\n";

  return report;
}
console.log(generateClassPerformanceReport(studentsData));

/*
========= Class performance report ==============
Topper
--------
Name:  Kaveri
Rollno: 104
Total marks: 469
Grade: A
A graders: 
-----------
Total no. of A graders: 1
Name: Kaveri
Total marks: 469
------------
Class average: 
------------
Total Marks scored by Class : 1746
Total Average of class :349.2
-------------
Total Average of Hindi: 83
Total Average of Maths: 92
Total Average of English: 83
Total Average of Science: 85.25
Total Average of Computers: 93.25



*/