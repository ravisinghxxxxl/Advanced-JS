console.log('this is tut20');
let impArray = ['adrak', 'pyaz', 'bhindi']
// add a key value pair inside local Storage

localStorage.setItem('name', 'harry'); 
localStorage.setItem('name2', 'ravi');
localStorage.setItem('sabzis',JSON.stringify(impArray))

// clear entire localStorage
// localStorage.clear()

// retreive an item from localStorage
let name = JSON.parse(localStorage.getItem('sabzis'));
console.log(name); 


sessionStorage.setItem('name', 'harry'); 
sessionStorage.setItem('name2', 'ravi');
session Storage.setItem('sabzis',JSON.stringify(impArray))
