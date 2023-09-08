const validationInput = document.getElementById("validation-input");
const dataLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", function () {

const inputValue = validationInput.value.trim();
const inputLength = inputValue.length;


validationInput.classList.remove("valid", "invalid");


if (inputLength === dataLength) {
    validationInput.classList.add("valid");
} else {
    validationInput.classList.add("invalid");
}
});
