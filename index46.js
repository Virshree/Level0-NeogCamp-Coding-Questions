function printWeatherData(){
    let weatherData={
            city:"Tokyo",
            temperature:28,
            humidity:70,
            weatherCondition:"Partly cloudy"
    }
    console.log(weatherData);

    let newWeatherData={...weatherData}
    console.log("New weather data:",newWeatherData);

    if(newWeatherData==weatherData){
        console.log("Are newWeatherData are same as weatherData?:true");//true

    }
    else{
        console.log("Are newWeatherData are same as weatherData?:false");//false

    }
    if(newWeatherData.humidity>65){
        newWeatherData.weatherCondition="CLoudly";
        console.log("New weather data:",newWeatherData);
    }

}
printWeatherData();

// {
//     city: 'Tokyo',
//     temperature: 28,
//     humidity: 70,
//     weatherCondition: 'Partly cloudy'
//   }

// New weather data: {
//     city: 'Tokyo',
//     temperature: 28,
//     humidity: 70,
//     weatherCondition: 'CLoudly'
//   }

function compareBooks(){
        let book1={
            title:"Animal Farm",
            author:"George Orwell",
            numberofPages:140
        }
        let book2={
            title:"Coming up for Air",
            author:"George Orwell",
            numberofPages:210
        }
        console.log("Book 1",book1);
        console.log("Book 2",book2);

        if(book1.numberofPages>book2.numberofPages){
            console.log(`${book1.title} is thicker than ${book2.title}`);

        }
        else{
            // console.log(`${book2.title} is thicker than ${book1.title}`);//true

        }
        if(book1.author===book2.author){
            console.log("Both books are written by same author,"+book1.author)
        }
        else{
            console.log("The books are written by different authors")
        }
}
compareBooks();

// Book 1 { title: 'Animal Farm', author: 'George  Orwell', numberofPages: 140 }
// Book 2 {
//   title: 'Coming up for Air',
//   author: 'George Orwell',
//   numberofPages: 210
// }