function randomFromArray(arr){
  let i = Math.floor(Math.random()*arr.length);
  return arr[i];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;