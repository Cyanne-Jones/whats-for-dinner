var letsCookButton = document.querySelector("#lets-cook-button");
var resultBox = document.querySelector(".result-box");
var radios = document.querySelectorAll('input[name="answer"]')
var cookpotImage = document.querySelector("#cookpot");

letsCookButton.addEventListener('click', showFood);

function animate() {
  cookpotImage.classList.add("rotate-animation");
}

function getRadioValue() {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
};

function reassignResultHTML() {
  var foodType = getRadioValue();
  if (foodType === "side") {
    resultBox.innerHTML = `<h3 class="decree">The <em>House Recipe Spell™</em> Decrees...</h3><h2 class="magic-result">✨You should make ${sides[getRandomNumber(sides)]}!✨</h2>`;
  } else if (foodType === "main-dish") {
    resultBox.innerHTML = `<h3 class="decree">The <em>House Recipe Spell™</em> Decrees...</h3><h2 class="magic-result">✨You should make ${mains[getRandomNumber(mains)]}!✨</h2>`;
  } else if (foodType === "dessert") {
    resultBox.innerHTML = `<h3 class="decree">The <em>House Recipe Spell™</em> Decrees...</h3><h2 class="magic-result">✨You should make ${desserts[getRandomNumber(desserts)]}!✨</h2>`;
  } else if (foodType === "entire-meal"){
    resultBox.innerHTML = `<h3 class="decree">The <em>House Recipe Spell™</em> Decrees...</h3>
    <h2 class="magic-result">✨You should make ${sides[getRandomNumber(sides)]} with ${mains[getRandomNumber(mains)]} and ${desserts[getRandomNumber(desserts)]}!✨</h2>`;
  }
};

function showFood(event) {
  event.preventDefault();
  animate();
  setTimeout(reassignResultHTML, 3000);
};



function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length)
};

var sides = [
  'Chips & Guac',
  'Musubi',
  'Roasted Brussels Sprouts',
  'Miso Glazed Carrots',
  'Miso Glazed Carrots',
  'Miso Glazed Carrots',
  'Crispy Potatoes',
  'Sweet Potato Tots',
  'Coconut Rice',
  'Caesar Salad',
  'Shrimp Summer Rolls',
  'Garlic Butter Mushrooms',
  'Hush Puppies'
];

var mains = [
  'Carnitas Burritos',
  'BBQ Ribs',
  'Sushi',
  'Spaghetti and Meatballs',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Chicken Parmesean',
  'Butternut Squash Soup',
  'BBQ Chicken Burgers',
  'Ramen',
  'Empanadas',
  'Chicken Fried Rice',
  'Sheet Pan Fajitas',
  'Margarita Pizza',

];

var desserts = [
  'Ice Cream',
  'Rice Crispy Treats',
  'Tiramisu',
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Macaroons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs'
];
