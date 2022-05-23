console.log('this is tutorial16');

let cont = document.querySelector('.no')
cont = document.querySelector('.container')

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[0].nodeType
console.log(nodeType);


// // nodeTypes
// 1 element
// 2 attribute
// 3 text node
// 4 Comment
// 9 document 
// 10 doctype
 



// console.log(cont.childNodes);
// console.log(cont.сhildren);

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);


console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);















