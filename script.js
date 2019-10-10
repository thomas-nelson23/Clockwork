var clockTime = new Date();
var clockSpace = document.getElementById("clock");

//clockSpace.innerHTML = clockTime;

var hours = clockTime.getHours();
if (hours > 12) {
  hours -= 12;
}

var minutes = clockTime.getMinutes();
var seconds = clockTime.getSeconds();

console.log(minutes, seconds);
