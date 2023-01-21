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
const enterButton = document.querySelector("addTaskBtn");
const input = document.querySelector("myInput");
const ul = document.querySelector("#myUL");
const li = document.createElement("li");

const timerButton = document.createElement("button");
const startBtn = document.createElement("button");
const pauseBtn = document.createElement("button");
const stopBtn = document.createElement("button");

const createTaskPanel = function(){
  const time = 0;
  const running = 0;
  const resetTimer = false;

  //add timer
  timerButton.style.backgroundColor = "black";
  timerButton.innerHTML = "00:00:00";
  li.appendChild(timerButton); 

//add start button
startBtn.style.backgroundColor = "blue";
startBtn.innerHTML = "<button>\u23f5 </button>";
startBtn.addEventListener('click', startTimer);

//add pause button

//delBtn.appendChild(document.createTextNode("X"));
pauseBtn.style.backgroundColor = "yellow";
pauseBtn.innerHTML = "<button>\u00D7</button>";
pauseBtn.addEventListener('click', pauseTimer);

//add stop button
stopBtn.style.backgroundColor = "green";
stopBtn.innerHTML = "<button>\u23F8  </button>";
li.appendChild(stopBtn);
stopBtn.addEventListener('click', stopTimer);

 
  function pauseTimer() {
      li.addEventListener('click', pauseBtn);

  
    startBtn.enabled = true;
    pauseBtn.enabled = false;
    stopBtn.enabled = true;
  
  }
  pauseTimer();

  function startTimer() {
    
   
    if (resetTimer) {
      reset();
    }    
    if (running == 0) { // add an event listener here
      running = 1;
      increment(timerSpan);
      startBtn.enabled = false;
      pauseBtn.enabled = true;
      stopBtn.enabled = true;
    }
   
    li.addEventListener('click', startBtn);
  
  }

  function stopTimer() {
   
  li.addEventListener('click', stopBtn);

    running = 0;
    startBtn.enabled = true;
    pauseBtn.enabled = false;
    stopBtn.enabled = false;
    resetTimer = true;
    
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

        timerButton.innerHTML = mins + ":" + secs + ":" + "0" + tenths;
        increment();
      }, 100);
    }
  }
  
  };

  createTaskPanel();

  

