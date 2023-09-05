const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {

const inputValue = nameInput.value;

    nameOutput.textContent = inputValue.trim() !== "" ? inputValue : "Anonymous";
});

// знайшов в інеті 8 рядок про trim уяви собі не мав 