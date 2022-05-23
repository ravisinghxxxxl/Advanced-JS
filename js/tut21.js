


// create a new element
let divElem = document.createElement('div');

// add text to created element 

let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode('this is my element, click to edit it');
} else {
    text = document.createTextNode(val); 
}
divElem.appendChild(text)

// give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border: 2px solid black; width: 154px; margin: 34px; padding: 23px');

//grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// insert the element before element with id first
container.insertBefore(divElem, first);


// addEventListener to the div elem

divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0){
    let html = elem.innerHTML;
   divElem.innerHTML = `<textarea class="form-control textarea" id="textarea"  rows="3">${html}</textarea> `;
    }

// listen for the blur event on textarea
let textarea = document.getElementById('textarea');
textarea.addEventListener('blur', function() {
    elem.innerHTML = textarea.value;
    localStorage.setItem('text', textarea.value)
    
    })
})
let textarea = document.getElementById('textarea')





















// console.log(divElem, container, first);




 




























