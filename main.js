const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const divBox = document.createElement('div');
    divBox.className = 'box';
    container.appendChild(divBox);
  }
}

for (const item of container.children) {
  item.addEventListener('mouseenter', leaveTrace);

  function leaveTrace(e) {
    e.target.style.filter = 'brightness(140%)';
    e.target.style.border = '1px solid transparent';
  }
}
