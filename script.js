const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const content = document.createElement('div');
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