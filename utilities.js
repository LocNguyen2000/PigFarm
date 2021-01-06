// general functions


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// choose random non-repeating id for pig => trough
function choosePig(min, max) {
  let id = getRandomInt(min, max);
  console.log("Random number: " + id);
  // check if id of this pig exist in trough
  if (!inTrough(id)) {
    return id;
  } else if (isFull()) {
    return 0;
  }
  return choosePig(min, max);
}
// check if trough is full or all pig is in trough
function isFull() {
  let troughUsed = 0;
  troughList.map((t) => {
    if (t.pigID != 0) troughUsed++;
  });
  if (troughUsed <= 5) {
    if (troughUsed == pigList.length) return true;
    else return false;
  }
  return true;
}

function existPig(id) {
    for (let pig of pigList){
      if(pig.id == id){
        return true
      }
    }
    return false
}

// check if exist pig with id in trough
function inTrough(pigID) {
  for (let t of troughList) {
    if (t.pigID == pigID) {
      console.log("Exist Trough with: " + t.pigID);
      return true;
    }
  }
  console.log("There is not: " + pigID + ". Pig can enter");
  return false;
}
