// Obtener referencias a los elementos DOM
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');

// Inicializar el valor del contador
let counterValue = 0;

// Agregar escuchas de clic a los botones
decrementButton.addEventListener('click', () => {
counterValue--;
valueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
counterValue++;
valueElement.textContent = counterValue;
});