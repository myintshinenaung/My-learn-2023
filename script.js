// Get input fields and button elements
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

// Add click event listener to button
button.addEventListener("click", () => {
  // Get input field values and convert them to numbers
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);

  // Perform calculation and display result
  const sum = num1 + num2;
  result.textContent = sum;
});
