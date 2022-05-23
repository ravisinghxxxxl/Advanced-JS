const proto = {
    slogan: function () {
        return `this company is the best`
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// create harry Object 
const harry = Object.create(proto);
harry.name = "harry";
harry.role = "programmer";
harry.changeName('harry2');

// console.log(harry);



// employee constructor 
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// slogan
Employee.prototype.slogan = function () {
    return `this company is the best regards ${this.name}`;
}

// create an object from this constructor now 
let harryObj = new Employee('harry', 234234, 83);
// console.log(harryObj.slogan())

// Programmer constructor
function   programmer  (name, salary, experience, language) {
Employee.call(this, name, salary, experience);  // call employee constructor
this.language = language;   
}

//inherit the prototype
programmer.prototype = Object.create(Employee.prototype);

//manually set the constructor 
programmer.prototype.constructor = programmer;

let rohan = new programmer('Rohan', 23, 1, 'javaScript');
console.log(rohan);






