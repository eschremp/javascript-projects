// Code your orbitCircumference function here:
function orbitCircumference(r) {
  return Math.round(2*Math.PI*r);
}

// Code your missionDuration function here:
let distance;
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) {
  distance = orbitCircumference(orbitRadius)*orbitsCompleted
  let time = (Math.round((distance/orbitalSpeed) *100))/100;
  
  return time;
}
console.log(missionDuration(5));
console.log(`The mission will travel ${distance} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random()*(arr.length))];
}

// Code your oxygenExpended function here:
function oxygenExpended (orbitsWanted, orbitRadius, orbitalSpeed) {
  let hrs = missionDuration(orbitsWanted, orbitRadius, orbitalSpeed)
  let spaceWalker = selectRandomEntry(crew);
  let oxygenNeeded = Math.round(spaceWalker.o2Used(hrs)* 1000)/1000;
  return `${spaceWalker.name} will perform the spacewalk, which will last ${hrs} hours and require ${oxygenNeeded} kg of oxygen.`
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 var crew = [candidateA,candidateC,candidateE];
 console.log(oxygenExpended(3, 40000, 40000));

 function conserveOxygen(arr) {
  let crewMember = arr[0]
  let lowestO2 = arr[0].o2Used(1);
  for (let i = 1; i < arr.length; i++) {
    let testO2 = arr[i].o2Used(1)
    if (lowestO2 > testO2 ) {
      lowestO2 = testO2;
      crewMember = arr[i];
    }
  }
  return crewMember;
 }
 console.log(conserveOxygen(crew));
 function lowestOxygenExpended (orbitsWanted, orbitRadius, orbitalSpeed) {
  let hrs = missionDuration(orbitsWanted, orbitRadius, orbitalSpeed)
  let spaceWalker = conserveOxygen(crew);
  let oxygenNeeded = Math.round(spaceWalker.o2Used(hrs)* 1000)/1000;
  return `${spaceWalker.name} will perform the spacewalk, which will last ${hrs} hours and require ${oxygenNeeded} kg of oxygen.`
}
console.log(lowestOxygenExpended(3));