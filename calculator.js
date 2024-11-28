// DOM Elements
let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");
let addBtn = document.querySelector("#addBtn");
let subBtn = document.querySelector("#subBtn");
let mulBtn = document.querySelector("#mulBtn");
let divBtn = document.querySelector("#divBtn");
let resultsList = document.querySelector("#results");

// Function to add a result to the list
let addResultToList = (operation, result) => {
    let li = document.createElement("li");
    li.textContent = `${operation}: ${result}`;
    resultsList.appendChild(li);
};

// Event Listeners
addBtn.addEventListener("click", () => {
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    if (!Number(num1) || !Number(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    let result = num1 + num2;
    addResultToList("Addition", result);
});

subBtn.addEventListener("click", () => {
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    if (!Number(num1) || !Number(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    let result = num1 - num2;
    addResultToList("Subtraction", result);
});

mulBtn.addEventListener("click", () => {
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    if (!Number(num1) || !Number(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    let result = num1 * num2;
    addResultToList("Multiplication", result);
});

divBtn.addEventListener("click", () => {
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    if (!Number(num1) || !Number(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
    }
    let result = num1 / num2;
    addResultToList("Division", result);
});
