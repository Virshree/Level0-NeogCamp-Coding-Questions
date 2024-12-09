const studentData = [
  { name: "Anu", rollNo: 101, hindi: 80, english: 75, maths: 90 },
  { name: "Priya", rollNo: 102, hindi: 85, english: 70, maths: 95 },
  { name: "Ravi", rollNo: 103, hindi: 78, english: 92, maths: 87 },
];

function printReportCard(rollNo) {
  let student = getReportByRollno(rollNo);
  // console.log(student);
  console.log("------Report card for " + student.name + "-------");
  console.log("Roll No: " + student.rollNo);
  console.log("-------------");
  console.log("Marks: ");
  console.log("-------------");
  console.log("hindi :", +student.hindi);
  console.log("english :", +student.english);
  console.log("maths :", +student.maths);
  console.log("\n");
}

function getReportByRollno(rollNo) {
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].rollNo == rollNo) {
      return studentData[i];
    }
  }
}

//   printReportCard(101)

// printReportCard(102)
// printReportCard(103)

//finding rollno of student

// { name: "Anu", rollNo: 101, hindi: 88, english: 75, maths: 90 },

/*

------Report card for Anu-------
Roll No: 101
-------------
Marks: 
-------------
hindi : 80
english : 75
maths : 90


------Report card for Priya-------
Roll No: 102
-------------
Marks: 
-------------
hindi : 85
english : 70
maths : 95


------Report card for Ravi-------
Roll No: 103
-------------
Marks: 
-------------
hindi : 78
english : 92
maths : 87

*/

//Finding student data from cutoff marks

function getStudentsDataByCutoff(subjectName, cutoff) {
  let result = [];
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i][subjectName] > cutoff) {
      result.push(studentData[i]);
    }
  }
  return result;
}

console.log("Students data with cutoff for hindi >80");

console.log(getStudentsDataByCutoff("hindi",80));

// Students with hindi cutoff>80
// { name: 'Priya', rollNo: 102, hindi: 85, english: 70, maths: 95 }

console.log("Students data with cutoff for maths >90");
console.log(getStudentsDataByCutoff("maths",90))

console.log("Students data with cutoff for english >90");
console.log(getStudentsDataByCutoff("english",90))
/*
Students data with cutoff for hindi >80
[ { name: 'Priya', rollNo: 102, hindi: 85, english: 70, maths: 95 } ]
Students data with cutoff for maths >90
[ { name: 'Priya', rollNo: 102, hindi: 85, english: 70, maths: 95 } ]
Students data with cutoff for english >90
[ { name: 'Ravi', rollNo: 103, hindi: 78, english: 92, maths: 87 } ]*/

//Calculate avg marks

for (let i = 0; i < studentData.length; i++) {
  let numofSubjects = 3;
  let total =
    studentData[i].hindi + studentData[i].english + studentData[i].maths;

  studentData[i].totalMarks = total;
  studentData[i].avgMarks = studentData[i].totalMarks / numofSubjects;
}
console.log(studentData);

//print student data who has more than avg marks(cutoff) 82

function printStudentDataAboveAverage(avgCutOff) {
  for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].avgMarks > avgCutOff) {
      console.log(
        studentData[i].name + " has average marks " + studentData[i].avgMarks
      );
    }
  }
}
 (printStudentDataAboveAverage(82));
// Priya has average marks 83.33333333333333
// Ravi has average marks 85.66666666666667

//print highest avgmarks

function printStudentDatawithHighestAverage(data) {
  let highestAvgMarks = data[0].avgMarks;

  for (let i = 1; i < data.length; i++) {
    if (data[i].avgMarks > highestAvgMarks) {
      highestAvgMarks = data[i].avgMarks;
    }
  }

  return highestAvgMarks;
}

 console.log("Student with highest avg marks: ",printStudentDatawithHighestAverage(studentData));
// Student with highest avg marks:  85.66666666666667   
