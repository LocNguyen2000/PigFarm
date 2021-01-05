// others general functions

// choose random non-repeating id for pig => trough
function randomNumber(min, max) {
  let number = Math.floor(Math.random() * (max - 0) + min);
  console.log("Random number: " + number);
  // check if id of this pig exist in trough
  if (!existPig(number)) {
    return number;
  } else if (isFull()) {
    return 0;
  }
  return randomNumber(min, max);
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
// check if exist pig with id in trough
function existPig(pigID) {
  for (let t of troughList) {
    if (t.pigID == pigID) {
      console.log("Exist Trough with: " + t.pigID);
      return true;
    }
  }
  console.log("There is not: " + pigID + ". Pig can enter");
  return false;
}
