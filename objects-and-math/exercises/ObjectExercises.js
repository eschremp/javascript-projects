let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.round(Math.random()* 10) 
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.round(Math.random()* 10 )
   }
};

let monkee = {
   name: "Brad",
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.round(Math.random()* 10 )
   }
};

let dog = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.round(Math.random()* 10 )
   }
};

let waterBear = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.round(Math.random()* 10 )
   }
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, monkee, dog, waterBear];

function crewReports(obj) {
   return(`${obj['name']} is a ${obj['species']}. They are ${obj['age']} years old and ${obj['mass']} kilograms. Their ID is ${obj['astronautID']}.`)
}
// Print out the relevant information about each animal.
for (let i = 0; i < crew.length; i++){
   console.log(crewReports(crew[i]));
}
// Start an animal race!
function fitnessTest(arr){
   let results = [];
   for (let i = 0; i < arr.length; i++) {
      let turns = Math.ceil(20 / arr[i].move());
      results.push(`${arr[i]['name']} took ${turns} turns to take 20 steps.`)
   }
   return results;
}
for (let i =0; i < crew.length; i++){
console.log(fitnessTest(crew)[i]);
};