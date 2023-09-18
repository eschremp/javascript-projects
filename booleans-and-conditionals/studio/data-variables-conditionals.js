// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minumumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'clear';
let preparedForLiftOff = true;



if (!(astronautCount <= 7)) {
    preparedForLiftOff = false;
} else if (!astronautCount === 'ready') {
    preparedForLiftOff = false;
} else if (!(totalMassKg <= maximumMassLimit)) {
    preparedForLiftOff = false;
} else if (!(fuelTempCelsius >= minumumFuelTemp && fuelTempCelsius <= maximumFuelTemp)) {
    preparedForLiftOff = false;
} else if (!fuelLevel === '100%') {
    preparedForLiftOff = false;
} else if (!weatherStatus === 'clear') {
    preparedForLiftOff = false;
} 


// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff == false) {
    console.log('Launch cancelled');
} else {
    console.log('All systems are a go! Initiating space shuttle launch sequence') 
    console.log('Date: ' + date);
    console.log('Time: ' + time);
    console.log('Astronaut Count: ' + astronautCount);
    console.log('Crew Mass: ' + crewMassKg);
    console.log('Fuel Mass: ' + fuelMassKg);
    console.log('Shuttle Mass: ' + shuttleMassKg);
    console.log('Total Mass: ' + totalMassKg);
    console.log('Fuel Temperature: ' + fuelTempCelsius);
    console.log('Weather Status: ' + weatherStatus);
    console.log('Have a safe trip astronauts!');
}