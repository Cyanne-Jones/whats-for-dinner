var letsCookButton = document.querySelector("#lets-cook-button");
var resultBox = document.querySelector(".result-box");
var radios = document.querySelectorAll('input[name="answer"]')

letsCookButton.addEventListener('click', showFood);


function getRadioValue() {
  event.preventDefault();
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      resultBox.innerText = `${radios[i].value}`
      return radios[i].value;
    }
  }
};
function showFood() {
  event.preventDefault()
  var foodType = getRadioValue();

  if (foodType === "side") {
    resultBox.innerHTML = `<h3 class="decree">The Spell Decrees...</h3><h2 class="magic-result">You should make ${sides[getRandomNumber(sides)]}!</h2>`;
  } else if (foodType === "main-dish") {
    resultBox.innerHTML = `<h3 class="decree">The Spell Decrees...</h3><h2 class="magic-result">You should make ${mains[getRandomNumber(mains)]}!</h2>`;
  } else if (foodType === "dessert") {
    resultBox.innerHTML = `<h3 class="decree">The Spell Decrees...</h3><h2 class="magic-result">You should make ${desserts[getRandomNumber(desserts)]}!</h2>`;
  } else if (foodType === "entire-meal"){
    resultBox.innerHTML = `<h3 class="decree">The Spell Decrees...</h3>
    <h2 class="magic-result">You should make ${sides[getRandomNumber(sides)]} with ${mains[getRandomNumber(mains)]} and ${desserts[getRandomNumber(desserts)]}!</h2>`;
  }
};

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length)
};

var sides = [
  'Chips & Guac',
  'Musubi',
  'Roasted Brussels Sprouts'
];

var mains = [
  'Carnitas Burritos',
  'BBQ Ribs',
  'Sushi'
];

var desserts = [
  'Ice Cream',
  'Rice Crispy Treats',
  'Tiramisu'
];
