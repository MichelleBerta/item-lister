var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
console.log("hello");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// delete event
itemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  console.log(li);

  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button
  var deleteBtn = document.createElement("button");

  // add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // append button to li
  li.appendChild(deleteBtn);

  // append li to list
  itemList.appendChild(li);
}
// remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter items
function filterItems(e) {
  // convert to lowercase
  var text = e.target.value.toLowerCase();
  console.log(text);
  // get lis
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
