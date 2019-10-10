var updateTime = function() {
  var clockTime = new Date();
  var clockSpace = document.getElementById("clock");
  var meridian = "AM";

  var hours = clockTime.getHours();
  var minutes = clockTime.getMinutes();
  var seconds = clockTime.getSeconds();

  //chooses AM/PM and adjusts from military time
  if (hours > 11) {
    meridian = "PM";
  }

  if (hours > 12) {
    hours -= 12;
  }

  //adding "0" to 1-digit numbers for spacing
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //displays time
  clockSpace.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridian;
};

var oneSecond = 1000;
setInterval(updateTime, oneSecond);
