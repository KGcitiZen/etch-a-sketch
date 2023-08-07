const container = document.querySelector('.container');
const sizeBtn = document.getElementById('sizeBtn');
createGrid(16);

sizeBtn.addEventListener('click', (e) => {
  const gridLength = +window.prompt('Enter the size (1-100)');
  if (!Number.isInteger(+gridLength)) {
    alert('Enter a whole number');
    return;
  } else if (gridLength < 1 || gridLength > 100) {
    alert('Enter a whole number between 1 and 100');
    return;
  }
  container.innerHTML = '';
  createGrid(gridLength);

  for (let item of container.children) {
    item.style.padding = `calc(100% / ${gridLength} / 2)`;
  }
});

function createGrid(length) {
  const totalDivs = length * length;

  for (let i = 0; i < totalDivs; i++) {
    const divBox = document.createElement('div');
    divBox.className = 'box';
    container.appendChild(divBox);
  }
  for (const item of container.children) {
    item.addEventListener('mouseenter', leaveTrace);

    function leaveTrace(e) {
      e.target.style.background = `rgb(${getRandomColor()})`;
    }
  }

  function getRandomColor() {
    let r = Math.round(256 * Math.random());
    let g = Math.round(256 * Math.random());
    let b = Math.round(256 * Math.random());

    console.log(r);
    return `${r}, ${g}, ${b}`;
  }
}
