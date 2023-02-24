//DOM
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
document.alltextContent = 'Hello World'; // Modified to add "World"
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// GETELEMENTBYID //
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello World'; // Modified to add "World"
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello World</h3>';
headerTitle.innerHTML = '<h3>Hello World</h3> <h1>Item Lister<h1>';
header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Item 2'; // Modified to add "Hello"
items[1].style.color = Black;
items[1].style.backgroundColor = 'yellow';

// Gives error
//items.style.backgroundColor='#f4f4f4';

for (var i = 0; i < items.length; i++) {
items[i].style.backgroundColor = '#f4f4f4';
}

// GETELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

// // Gives error
// //itens.style.backgroundColor = '#f4f4f4';

for (var i = 0; i < li.length; i++){
li[i].style.backgroundColor = '#f4f4f4';
}

// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom= 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = '';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Submit";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERY SELECTORALL //
var titles = document.querySelectorAll('.title');

var odd = document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
odd[i].style.backgroundColor = '#f4f4f4';
even[i].style.backgroundColor = '';
}

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor;
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
console.log(itemList.firstChild);
// // FirstChild
console.log(itemList.firstChild);
// // firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent;

// lastChild
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello'; // Modified to add "Hello"

//

// nextSibling
console.log(itemList.nextSibling);
// // nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previous ElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');

console.log(newDiv);
newDiv.style. fontSize = '30px';

container.insertBefore(newDiv, h1);

