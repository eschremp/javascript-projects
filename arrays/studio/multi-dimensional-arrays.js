const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.toUpperCase().split(',');
console.log(food);

equipment = equipment.toUpperCase().split(',');
console.log(equipment);

pets = pets.toUpperCase().split(',');
console.log(pets);

sleepAids = sleepAids.toUpperCase().split(',');
console.log(sleepAids);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food, equipment, pets, sleepAids];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetNum = input.question('Please choose a cabinet(0-3)?');
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetNum >=0 && cabinetNum < 4) {
    console.log(`${cargoHold[cabinetNum]}`);
} else {
    console.log('Error! Number out of range!');
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cabinetNum2 = input.question('Please choose a cabinet(0-3)?');
let item = input.question('Select a item. ').toUpperCase();
if (cargoHold[cabinetNum2].includes(item)){
    console.log(`Cabinet ${cabinetNum2} does contain ${item}.`);
} else {
    console.log(`Cabinet ${cabinetNum2} does not contain ${item}.`);
}