


// object literal for creating objects 
let car = {
    name: 'maruti 800',
    topSpeed: 90,
    run: function run() {
        console.log('car is running');
    }
}

// creating a custructor for cars 
function generalCar(givenName, givenSpeed) {

    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
       console.log(`${this.name} is running`);
    };
    this.analyze = function() {
        console.log(`this car is ${200 - this.topSpeed} slower than mercedez`);
    }
}
car1 = new generalCar('nissan', 180);
console.log(car1);



