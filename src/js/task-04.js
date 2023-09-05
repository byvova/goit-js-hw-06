var counterValue = 0;
const decrementBtn = document.querySelector("#decrement");
const incrementBtn = document.querySelector("#increment")
const value = document.querySelector("#value")


decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
});

