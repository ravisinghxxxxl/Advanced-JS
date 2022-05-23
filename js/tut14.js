console.log('welcome to tutorial 14');
// single Element selector 
// multiple element selector


// single Element selector

let element = document.getElementById('myFirst'); 
// element = element.className
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'harry is great god';
element.innerHTML = '<b>harry is great god</b>';

// console.log(element.innerText);

let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
// console.log(sel);


// multi element Selectr

let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container')
elems = document.getElementsByTagName('div')
console.log(elems);

for (let index = 0; index < elems.length; index++) {
const element = elems[index];
console.log(element);    
element.style.color = 'blue';
}


// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });














