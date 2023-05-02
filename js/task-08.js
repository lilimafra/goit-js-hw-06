const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

if (!emailInput.value || !passwordInput.value) {
    alert('Todos los campos deben ser completados');
    return;
}

const formData = {
    email: emailInput.value,
    password: passwordInput.value
};

console.log(formData);
loginForm.reset();
});