// A simple JavaScript file to demonstrate basic functionality

// Function to display an alert message
function greet(name) {
  alert("Hello, " + name + "!");
}

// Function to change the text content of an element
function updateText(elementId, newText) {
  document.getElementById(elementId).textContent = newText;
}

// Event listener to trigger a function when the page is fully loaded
window.addEventListener('load', function() {
  greet("User");
  updateText("demo", "This text was changed using JavaScript!");
});
