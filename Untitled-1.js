//DOM
console.dir(document); 
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head); 
console.log(document.body);
document.alltextContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links); 
console.log(document.images);

// GETELEMENTBYID //
console.log(document.getElementById('header-title')); 
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
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

li[0].style.color = 'black';
li[1].style.color = 'black';
li[2].style.color = 'black';
li[3].style.color = 'black';
li[1].style.fontWeight = '';


li[1].textContent = 'Item 2';



console.log(titles);
titles[0].textContent = 'Hello';
titles[0].style.color = 'Black';

headerTitle.textContent = 'Item Lister';

li[2].style.backgroundColor = 'green';
li[0].style.fontWeight = 'bold';
li[1].style.fontWeight = 'bold';
li[2].style.fontWeight = 'bold';
li[3].style.fontWeight = 'bold';
