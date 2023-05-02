const input = document.querySelector('#validation-input');

function validateInput() {
    const expectedLength = parseInt(input.getAttribute('data-length'));
    const actualLength = input.value.length;

    if (actualLength === expectedLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
    }
}

input.addEventListener('blur', validateInput);