const input = document.querySelector("myInput");
const button = document.querySelector("mainButton");
const listItem = document.querySelector("mylist");

button.addEventListener('click', addingListItems);

const addingListItems = function() {
 const element = document.createElement("li");
 element.class = "list-item"
 element.textContent = input.value;

 const deleteBtn = document.createElement("button");
 deleteBtn.id = 'deleteBtn';
 deleteBtn.textContent = "\u2573"; 

 const pauseBtn = document.createElement("button")
 pauseBtn.id = 'pauseBtn'
 pauseBtn.textContent = "\u23F8";
};

