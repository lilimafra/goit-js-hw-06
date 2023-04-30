function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input').value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);