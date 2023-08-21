const container = document.querySelector('#container');
const clean = document.querySelector('.clean');
const changeGrid = document.querySelector('.mudar');
let gridSize;
start();

changeGrid.addEventListener('click', () => {
  cleanCanva();
  start2();
})


clean.addEventListener('click', () => {
  cleanCanva();
  start();
})

function start() {
  gridSize = 10;
  container.style.gridTemplateColumns = `repeat(${gridSize}, auto`;
  container.style.gridTemplateRows = `repeat(${gridSize}, auto`;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
  }
  // Used event delegation to target children of the grid
  container.addEventListener('mousemove', function (e) {
      // Add the "active" class to only divs with a "box" class
      if (e.target.matches('.content')) {
        e.target.style.backgroundColor = 'black';
      }
    });
}

function start2() {
  const newGridSize = parseInt(prompt("Escolha um número!"));
  container.style.gridTemplateColumns = `repeat(${newGridSize}, auto`;
  container.style.gridTemplateRows = `repeat(${newGridSize}, auto`;
  for (let i = 0; i < newGridSize; i++) {
    for (let j = 0; j < newGridSize; j++) {
        let content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
  }

  container.addEventListener('mousemove', function (e) {
    if (e.target.matches('.content')) {
      e.target.style.backgroundColor = 'black';
    }
  });
}
    

const cleanCanva = function() {
  let allCOntent = document.querySelectorAll('.content');
  for (let i = 0; i < allCOntent.length; i++) {
    allCOntent[i].remove();
  }
}

