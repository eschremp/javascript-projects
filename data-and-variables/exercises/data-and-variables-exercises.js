// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeed_MPH = 17500;
let distanceMars_KM = 225000000;
let distanceMoon_KM = 384400;
let milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed_MPH);
console.log(typeof distanceMars_KM);
console.log(typeof distanceMoon_KM);
console.log(typeof milesPerKilometer);
// Calculate a space mission below
let distanceMars_Miles = distanceMars_KM * milesPerKilometer;
let hoursToMars = distanceMars_Miles/shuttleSpeed_MPH;
let daysToMars = hoursToMars/24;
// Print the results of the space mission calculations below
console.log(shuttleName + ' will take ' +daysToMars + ' days to reach Mars.');
// Calculate a trip to the moon below
let distanceMoon_Miles = distanceMoon_KM * milesPerKilometer;
let hoursToMoon = distanceMoon_Miles/shuttleSpeed_MPH;
let daysToMoon = hoursToMoon/24;
// Print the results of the trip to the moon below
console.log(shuttleName + ' will take ' +daysToMoon + ' days to reach the Moon.');