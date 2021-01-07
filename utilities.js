// general functions


function getMatrix(width, height) {
  let matrix_ = Array(height).fill().map(()=>Array(width).fill(0))
  for (let i = sortCoordinate.y[0]; i <= sortCoordinate.y[1]; i++) {
    for (let j = sortCoordinate.x[0]; j <= sortCoordinate.x[1]; j++) {
        matrix_[i][j] = 3
    }
  }
  for (let i = feedCoordinate.y[0]; i <= feedCoordinate.y[1]; i++) {
    for (let j = feedCoordinate.x[0]; j <= feedCoordinate.x[1]; j++) {
        matrix_[i][j] = 1
    }
  }
  for (let i = weighCoordinate.y[0]; i <= weighCoordinate.y[1]; i++) {
    for (let j = weighCoordinate.x[0]; j <= weighCoordinate.x[1]; j++) {
        matrix_[i][j] = 2
    }
  }

  console.log(matrix_);
  return matrix_;
}

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
