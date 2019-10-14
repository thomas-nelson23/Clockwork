var updateTime = function () {
  var clockTime = new Date();
  var clockSpace = document.getElementById("clock");
  var meridian = "AM";
  var mHours = clockTime.getHours();

  var hours = clockTime.getHours();
  var minutes = clockTime.getMinutes();
  var seconds = clockTime.getSeconds();

  var button = document.querySelector("a", "click");

  //function timeSelect fires when dropdown item is selected
  //document.addEventListener("click", timeSelect);
  // a.onclick = timeSelect;
  // document.getElementsById("1").onclick = timeSelect();

  // function timeSelect() {
  //   let tester = document.getElementsByClassName("time").id;
  //   console.log(button);
  //   document.getElementById("body").style.backgroundColor = "blue";
  // }




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


  console.log(studyWindow)
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

  if (mHours != napWindow.value && mHours != studyWindow.value) {
    document.getElementById("body").style.backgroundImage = 'none';
    document.getElementById("title").innerHTML = "THIS IS A CLOCK.";
  }

  if (napWindow.value == studyWindow.value) {
    studyWindow.value++;
  }
};

//clock update every second
var oneSecond = 1000;
setInterval(updateTime, oneSecond);


var studyWindow = document.querySelector("#study");
var napWindow = document.querySelector("#nap");
