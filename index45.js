let citizen={
    name:"Ajay",
    age:72,
    city:"Indore"
}

if(citizen.age>=60){
    // console.log(`${citizen.name} is a senior citizen`)
}
else{
    console.log(`${citizen.name }is not senior citizen`)
}
// Ajay is a senior citizen

citizen.sugarLevel="Normal";

// console.log(`Sugar level for ${citizen.name} is ${citizen.sugarLevel}`);

if(citizen.age>=60 && citizen.sugarLevel=="Normal"){
    // console.log(`${citizen.name} is fit to travel` )
}
else{
    console.log(`${citizen.name} is not fit to travel` ) 
}
// Sugar level for Ajay is Normal
// Ajay is fit to travel


function releaseMovie(){
     let movie={
        title:"MI 7",
        duration:150,
        isReleased:false
    }
    console.log("Movie: ",movie)

    let newMovie=Object.create(movie);
    console.log("New movie:",newMovie);

    if(movie==newMovie){
        console.log("Is newMovie are same as movie? :true");//false
    }
    else{
        console.log("Is newMovie are same as movie? :false");//true
    }

    if(newMovie.duration>120){
        newMovie.isReleased=true;
        console.log(newMovie);
    }
}
// releaseMovie();


// Movie:  { title: 'MI 7', duration: 150, isReleased: false }
// New movie: {}

function compareMovieObjects(){
    let movie1={
        title:"The Lost City",
        duration:120
    }
    let movie2={
        title:"Murder Mystery2",
        duration:110
    }
    if(movie1.duration>movie2.duration){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
compareMovieObjects();//true

function printStudentDetails(){
    let student={
        name:"Priya",
        age:14,
        marks:45
    }
    // console.log(student);
    if(student.marks<60){
        student.isTopPerformer=false;
        console.log(student.isTopPerformer);
    }
    if(student.marks<60 && student.marks>=40){
         student.grade="D";
        console.log("Student :",student);
    }
}
printStudentDetails();
// { name: 'Priya', age: 14, marks: 45 }

function printBookDetails(){
    let book={
        title:"The Great Gatsby",
        author:"F.Scott Fitzgerald",
        genre:"Fiction,Classic",
        pages:650

    }
    if(book.pages>=500){
         console.log(`The book ${book.title}is long`);//true The book The Great Gatsbyis long

    }
    else{
        console.log(`The book ${book.title} is not long`);
    }
    book.cover="Hard cover"
    // console.log(`The book ${book.title} has ${book.cover} `);The book The Great Gatsby has Hard cover 
    if(book.cover=="Hard cover" || book.pages>300){
        console.log(`The book ${book.title} is heavy`);//true The book The Great Gatsby is heavy
    }
    else{
        console.log(`The book ${book.title} is not heavy`);//false
    }
}
 printBookDetails();