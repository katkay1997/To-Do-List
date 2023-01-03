// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Any future plans?");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Adding a timer to each list item 
var enterButton = document.getElementById("addTaskBtn"); // not sure if this code is needed
var input = document.getElementById("myInput");
var ul = document.querySelector("ul");

const createTaskPanel = function(){
  var time = 0;
  var running = 0;
  var resetTimer = false;

  var li = document.createElement("li");

  //add timer
  var timerSpan = document.createElement("span");
  timerSpan.setAttribute("id", "stopWatchDisplay");
  timerSpan.classList.add("timerDisplay");
  timerSpan.innerHTML = "00:00:00";
  li.appendChild(timerSpan); // there's an error on the browser. Figure out why

//add start button
var startBtn = document.createElement("button");
startBtn.innerHTML = "<span><i class='fa fa-play-circle'></i></span>";
startBtn.setAttribute("id", "startBtn");
li.appendChild(startBtn);
startBtn.addEventListener("click", startTimer);

//add pause button
var pauseBtn = document.createElement("button");
//delBtn.appendChild(document.createTextNode("X"));
pauseBtn.innerHTML = "<span><i class='fa fa-pause-circle'></i></span>";
pauseBtn.setAttribute("id", "pauseBtn");

//add stop button
var stopBtn = document.createElement("button");
stopBtn.innerHTML = "<span><i class='fa fa-check-circle'></i></span>";
stopBtn.setAttribute("id", "stopBtn");
li.appendChild(stopBtn);
  stopBtn.addEventListener("click", stopTimer);

  function pauseTimer() { // why is pauseTimer important? Find this value within your code
    li.classList.add("paused");
    li.classList.remove("started");
    li.classList.remove("done");
    running = 0;
    startBtn.enabled = true;
    pauseBtn.enabled = false;
    stopBtn.enabled = true;
    // console.log("pause:" + resetTimer);
  }

  function startTimer() {
    //console.log("start enter:" + resetTimer);
    //The classList property is not supported in Internet Explorer 9 and earlier versions.
    //li.classList.toggle("started");
    if (resetTimer) {
      reset();
    }    
    if (running == 0) {
      running = 1;
      increment(timerSpan);
      startBtn.enabled = false;
      pauseBtn.enabled = true;
      stopBtn.enabled = true;
    }
    li.classList.add("started");
    li.classList.remove("paused");
    li.classList.remove("done");
    // console.log("start exit:" + resetTimer);
  }

  function stopTimer() {
    li.classList.add("done");
    li.classList.remove("paused");
    li.classList.remove("started");
    running = 0;
    startBtn.enabled = true;
    pauseBtn.enabled = false;
    stopBtn.enabled = false;
    resetTimer = true;
    // console.log("stop:" + resetTimer);
  }
  function reset() {
    running = 0;
    time = 0;
    resetTimer = false;
    timerSpan.innerHTML = "00:00:00";
  }

  function increment() {
    if (running == 1) {
      setTimeout(function() {
        time++;
        var mins = Math.floor(time / 10 / 60) % 60;
        var secs = Math.floor(time / 10) % 60;
        var tenths = time % 10;

        if (mins < 10) {
          mins = "0" + mins;
        }
        if (secs < 10) {
          secs = "0" + secs;
        }

        timerSpan.innerHTML = mins + ":" + secs + ":" + "0" + tenths;
        increment();
      }, 100);
    }
  }
  
  };

  createTaskPanel();

