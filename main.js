var letsCookButton = document.querySelector("#lets-cook-button");
var resultBox = document.querySelector(".result-box");
var radios = document.querySelectorAll('input[name="answer"]')

letsCookButton.addEventListener('click', getRadioValue);


function getRadioValue() {
  event.preventDefault()
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      resultBox.innerText = `${radios[i].value}`
      return radios[i].value;
    }
  }
};
function getRandomNumber(array) {
  var num = Math.floor(Math.random(array.length))
  return num;
};

var sides = [
  'Chips & Guac',
  'Musubi',
  'Roasted Brussels Sprouts'
];

var mains = [
  'Carnitas Burrito',
  'BBQ Ribs',
  'Sushi'
];

var desserts = [
  'Ice Cream',
  'Rice Crispy Treats',
  'Tiramisu'
];
