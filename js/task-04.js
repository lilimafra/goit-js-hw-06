const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');

let counterValue = 2;
valueElement.textContent = counterValue;

decrementButton.addEventListener('click', () => {
counterValue--;
valueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
counterValue++;
valueElement.textContent = counterValue;
});