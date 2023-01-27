const input = document.querySelector("myInput");
const button = document.querySelector("mainButton");
const listItem = document.querySelector("mylist");

button.addEventListener('click', addingListItems);

const addingListItems = function() {
 const element = document.createElement("li");
 element.class = "list-item"
 element.textContent = input.value;

};

