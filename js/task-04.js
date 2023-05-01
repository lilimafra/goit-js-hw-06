const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
counterValue--;
valueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
counterValue++;
valueElement.textContent = counterValue;
});