const container = document.querySelector('.container');
const sizeBtn = document.getElementById('sizeBtn');

// by default, 16x16 grid is on the page
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
  // update previous grid with a new one
  container.innerHTML = '';
  createGrid(gridLength);

  // padding in combination with border-box (look in CSS file)
  // to dynamically change square div's size
  for (let item of container.children) {
    item.style.padding = `calc(100% / ${gridLength} / 2)`;
  }
});

function createGrid(length) {
  // setting grid size
  const totalDivs = length * length;
  for (let i = 0; i < totalDivs; i++) {
    const divBox = document.createElement('div');
    divBox.className = 'box';
    // need interactions number for darkening function
    divBox.setAttribute('data-interactions', '0');
    container.appendChild(divBox);
  }

  for (const item of container.children) {
    item.addEventListener('mouseenter', leaveTrace);

    function leaveTrace(e) {
      // randomly colors targeted square
      e.target.style.background = `rgb(${getRandomColor()})`;

      function getRandomColor() {
        let r = Math.round(256 * Math.random());
        let g = Math.round(256 * Math.random());
        let b = Math.round(256 * Math.random());

        return `${r}, ${g}, ${b}`;
      }

      // darken targeted square depending on interactions number
      let interactionTimes = parseInt(
        e.target.getAttribute('data-interactions')
      );
      console.log(interactionTimes);
      if (interactionTimes <= 10) {
        let brightness = 100 - interactionTimes * 10;
        e.target.style.filter = `brightness(${brightness}%)`;
        interactionTimes++;
        e.target.setAttribute('data-interactions', interactionTimes.toString());
      }
    }
  }
}
