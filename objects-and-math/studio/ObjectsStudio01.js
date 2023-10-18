// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random()*(arr.length))];
}
// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];
let idList = [];
while (idList.length < 3) {
  let id = selectRandomEntry(idNumbers);
  if (!idList.includes(id)) {
    idList.push(id)
  }
  }


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crew = [];
// Code your template literal and console.log statements:
function crewMaker(animals, idList){
  for (let i = 0; i < animals.length; i ++) {
    if (idList.includes(animals[i]['astronautID'])){
      crew.push(animals[i]['name']);
      
  }
} 
return crew
}
crewMaker(animals, idList);
console.log(`${crew[0]}, ${crew[1]}, and ${crew[2]} are going to space!`);
