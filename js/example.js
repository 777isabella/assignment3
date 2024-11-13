// Select all <li> elements in the shopping list
var listItems = document.getElementsByTagName('li');


for (var i = 0; i < listItems.length; i++) {
    var itemText = listItems[i].textContent.toLowerCase(); 
    if (itemText === 'fresh figs' || itemText === 'kale' || itemText === 'honey') {
        listItems[i].className = 'cool'; 
    }
}

var heading = document.querySelector('h2'); 
var totalItems = listItems.length; 
heading.innerHTML = 'Buy groceries <span>' + totalItems + '</span>'; 






