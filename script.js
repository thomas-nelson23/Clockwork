var updateTime = function () {
  var clockTime = new Date();
  var clockSpace = document.getElementById("clock");
  var meridian = "AM";
  var mHours = clockTime.getHours();

  var hours = clockTime.getHours();
  var minutes = clockTime.getMinutes();
  var seconds = clockTime.getSeconds();

  var button = document.querySelector("a", "click");


  //AM-PM logic and 24hr to 12hr adjustment
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

  //changes backround during studyTime
  if (mHours == studyWindow.value) {
    document.getElementById("body").style.backgroundImage = "url('studyBooks.png')";
    document.getElementById("title").innerHTML = "Study Time!";
  }

  //changes background during nap time
  if (mHours == napWindow.value) {
    document.getElementById("body").style.backgroundImage = "url('nap.jpg')";
    document.getElementById("title").innerHTML = "Nap Time!";
  }

  //changes background during lunch time
  if (mHours == lunchWindow.value) {
    document.getElementById("body").style.backgroundImage = "url('lunch.jpg')";
    document.getElementById("title").innerHTML = "Lunch Time!";
  }

  //resets background and title to default
  if (mHours != napWindow.value && mHours != studyWindow.value && mHours != lunchWindow.value) {
    document.getElementById("body").style.backgroundImage = 'none';
    document.getElementById("title").innerHTML = "THIS IS A CLOCK.";
  }

  //changes time windows if the same one is selected twice
  if (napWindow.value == studyWindow.value || napWindow.value == lunchWindow.value) {
    napWindow.value++;
  }
  if (lunchWindow.value == studyWindow.value || lunchWindow.value == napWindow.value) {
    lunchWindow.value++;
  }


  if (partyTime) {
    document.getElementById("body").style.backgroundImage = "url('party.jpg')";
    document.getElementById("title").innerHTML = "PARTY TIME!!!";
  }
};



//clock update every second
var oneSecond = 1000;
setInterval(updateTime, oneSecond);


//grabs select elements
var studyWindow = document.querySelector("#study");
var napWindow = document.querySelector("#nap");
var lunchWindow = document.querySelector("#lunch");


//party Time button
let partyTime = false;
document.getElementById("party").addEventListener("click", function () {
  partyTime = !partyTime;
  console.log(partyTime);
});

