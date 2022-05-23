console.log('welcome to tut 16');
let element = document.createElement('li');
let text = document.createTextNode('i am a text node')
element.appendChild(text)
// add a class name to li element


element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'myTitle')
element.innerText = '<b>hello this is created by harry</b>';
element.innerHTML = '<b>hello this is created by harry</b>';

let ul = document.querySelector('ul.this')
ul.appendChild(element);
// console.log(ul);
// console.log(element);
 

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this node is defined');
elem2.appendChild(tnode);


element.replaceWith(elem2);
let myul = document.getElementById('myul');

myul.replaceChild(element, document.getElementById('fui'))


















 
