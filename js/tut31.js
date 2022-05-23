console.log('this is tut31');

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name       = givenName;
        this.experience = givenExperience;
        this.division   = givenDivision;
    }
    slogan() {
        return `i am ${this.name} and this company is the best`;
    }
    joiningYear() {
        return 2019 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, givenLanguage, givenGithub)   {
        super (givenName, givenExperience, givenDivision) //matches with where it is extending from
        this.language = givenLanguage;  // but givenLanguage has to be declared beacuse it didnt exist previously
        this.gitHub  = givenGithub;
    }  
    favLang() {
        if (this.language == 'python') {
            return 'python';
        } else {
            return 'javaScript';
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}

// harry = new Employee("harry", 5, "js");
// // console.log(harry.joiningYear());
// console.log(Employee.add(34, 5));

rohan = new Programmer('rohan', 5, 'lays', 'python', 'rohan420') 
console.log(rohan);
console.log(rohan.favLang());
console.log(Programmer.multiply(23, 3));



 









