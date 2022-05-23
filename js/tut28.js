
// object literl: object.prototype

let obj = {
    name: 'harry',
    channel: 'code with hrry',
    address: 'mars'
}

console.log(obj);


// creating a Constructor/Object
function Obj(givenName) {
    this.name = givenName;
}
Obj.prototype.getName = function () {
    return this.name;
}
Obj.prototype.setName = function (newName) {
    this.name = newName;
}


// prototype 
let obj2 = new Obj('harry');
console.log(obj2);





