let recipe={
    name:"Pasta Carbonara",
    cuisine:"Italian"
}

console.log("Recipe name: ",recipe.name)
// Recipe name:  Pasta Carbonara

console.log(recipe.cuisine);//Italian

recipe.name="Bell Pepper Pizza";
console.log(recipe);

// { name: 'Bell Pepper Pizza', cuisine: 'Italian' }

recipe.difficulty="Intermediate";
console.log(recipe.difficulty);//Intermediate

for(property in recipe){
    console.log(property+":"+recipe[property]);
}

// name:Bell Pepper Pizza
// cuisine:Italian
// difficulty:Intermediate


let laptop={
    model:"XPS 15",
    isTouchScreen:true,
    screenSize:15.6,

}

laptop.brand="Dell"
console.log(laptop.brand);//Dell

laptop.processor="Intel core i7";
console.log(laptop.processor);//Intel core i7

laptop.screenSize=15.4;

console.log(laptop.screenSize);

for(property in laptop){
     console.log(property +":"+laptop[property]);
}
// model:XPS 15
// isTouchScreen:true
// screenSize:15.4
// brand:Dell
// processor:Intel core i7