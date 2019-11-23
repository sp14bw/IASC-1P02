var elementOne = document.getElementById("boxOne");
var elementOne = document.getElementById("boxTwo");

function sum() {
  var calculation = Number(elementOne.value) + Number(elementTwo.value);
  document.getElementById("Answer").innerHTML = calculation;
}

function difference() {
  var calculation = Number(elementOne.value) - Number(elementTwo.value);
  document.getElementById("Answer").innerHTML = calculation;
}

function product() {
  var calculation = Number(elementOne.value) * Number(elementTwo.value);
  document.getElementById("Answer").innerHTML = calculation;
}

function quotient() {
  var calculation = Number(elementOne.value) / Number(elementTwo.value);
  document.getElementById("Answer").innerHTML = calculation;
}
