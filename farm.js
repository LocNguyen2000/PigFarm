const farm = {};

const cellWidth = 100
const cellheight = 100
const matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

farm.renderFarmArea = () => {
  let farm = document.getElementById("farm");

  for (let i = 0; i < matrix.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    // row.style.background = 'red'
    for (let j = 0; j < matrix[i].length; j++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        if(matrix[i][j] == 0){
            // blue
            row.appendChild(cell)
        }
        else if (matrix[i][j] == 1){
            // yellow
            cell.classList.add('feed')
            row.appendChild(cell)
        }
        
    }
    farm.appendChild(row)
  }
};

farm.renderPig = () => {
    let randomRow = Math.floor(Math.random()*4)
    let randomCell = Math.floor(Math.random()*4)
    
};
