console.log('we are in tut7 and lets discuss about arrays');

let marks = [34, 45, 54, 23, 66, 34]
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(34, 34, 'orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.length);
console.log(Array.isArray('dfdf'));
arr[0] = 'harry';
console.log(marks);
 
arr[0] = 'harry';
let arrelment = arr[0];

let value = marks.indexOf(66);
console.log(value);

// MUTATING OR MODIFIENG ARRAYS
marks.push(3564);
marks.unshift(23);
marks.pop();
marks.splice(2, 3);
marks.reverse();

let marks2 = [1, 2, 3, 4, 5]
marks.concat(marks2)
console.log(marks);

let myobj = {
    'first name': 'harry',
    channle: 'code with harry',
    status: true,
    marks: [23],
}

console.log(myobj);
console.log(myobj['first name']);
console.log(myobj.marks);


