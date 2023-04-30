const input = document.getElementById("validation-input");

input.addEventListener("blur", function() {
    const expectedLength = parseInt(input.getAttribute("data-length"));
    const actualLength = input.value.length;

    if (actualLength === expectedLength) {
    input.style.borderColor = "green";
    } else {
    input.style.borderColor = "red";
    }
});