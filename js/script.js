let selectedNumber;
const selectedNumberField = document.getElementById("selected-number-field");
const numbers = document.getElementsByClassName("rating-numbers-item");
const activeNumbers = document.getElementsByClassName("rating-numbers-item active");
const rating = document.getElementById("rating");
const thank = document.getElementById("thank");
const button = document.getElementById("button");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", changeNumberState);
};

function changeNumberState(event) {
  if (activeNumbers.length > 0) {
    for (let i = 0; i < activeNumbers.length; i++) {
      activeNumbers[i].classList.remove("active");
    }
  };
  this.classList.add("active");
  selectedNumber = this.innerHTML;
}

button.addEventListener("click", changeState);

function changeState(event) {
  if (activeNumbers.length !== 0) {
    selectedNumberField.innerHTML = selectedNumber;
    rating.classList.remove("active");
    thank.classList.add("active");
  } else {
    alert("Please choose the number");
  }
}