let animal={
    name:"Lion",
    averageWeight:190,
    sound:"Roar"
}

console.log("Animal name: ",animal.name);
console.log("Animal average weight: ",animal.averageWeight);
console.log("Animal sound: ",animal.sound);

// Animal name:  Lion
// Animal average weight:  190
// Animal sound:  Roar

animal.averageWeight=210;

console.log("Updated array:",animal);
// Updated array: { name: 'Lion', averageWeight: 210, sound: 'Roar' }

animal.diet="Carnivore"
console.log("All properties of animal object:");

for(property in animal){
     console.log(property +":"+animal[property]);
}

// All properties of animal object:
// name:Lion
// averageWeight:210
// sound:Roar
// diet:Carnivore


let movie={
    title:"Inception",
    director:"Christopher Nolan"
}
movie.year=2010;

 console.log(movie.year);//2010

movie.duration=154;

 console.log(movie.duration);//154

movie.duration=148;
 console.log("Updated duration: ",movie.duration);//148

movie.year=2010+1;
 console.log("Updated year:",movie.year);2011

console.log("All properties of movie object:")
for(let property in movie){
 console.log(property +":"+movie[property]);
}

// All properties of movie object:
// title:Inception
// director:Christopher Nolan
// year:2011
// duration:148