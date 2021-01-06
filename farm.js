const farm = {};

// 0: life area - 1: feed area - 2: weight area
const matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 2, 2, 1, 1, 1, 1, 0],
  [0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


// render area with matrix cell[10][10] 50x50 
farm.renderFarmArea = () => {
  let farm = document.getElementById("farm");

  for (let i = 0; i < matrix.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < matrix[i].length; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      if (matrix[i][j] == 0) {
        row.appendChild(cell);
      } 
      else if (matrix[i][j] == 1) {
        cell.classList.add("feed");
        row.appendChild(cell);
      } 
      else if (matrix[i][j] == 2) {
        cell.classList.add("weigh");
        row.appendChild(cell);
      }
    }
    farm.appendChild(row);
  }
};

// UNDONE - render pigs at position 0
farm.renderPig = (pig) => {
  let farm = document.getElementById("farm");

  let posX = pig.x;
  let posY = pig.y;

  console.log("Random row & cell: " + posX + " " + posY);
  let div = document.createElement("div");
  if (matrix[posY][posX] == 0) {
    div.classList.add("pig");
    div.style.position = "absolute";
    div.style.left = 25 + posX * 50 + "px";
    div.style.top = 25 + posY * 50 + "px";
    farm.appendChild(div);
  } else {
    console.log("not possible");
  }
};

farm.updatePigPos() = () => {

};
