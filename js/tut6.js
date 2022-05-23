// console.log('we are at tut 6');
const name = "hary";
const greeting = 'good morning';

// console.log(greeting + ' ' + name);

let html; 
html =  '<h1> this is heading </h1>' +
     '<p> para one </p>'; 

html = html.concat('this');
// console.log(html)
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[0]);

// console.log(html.indexOf('this'));
// console.log(html.lastIndexOf('/'));
// console.log(html.charAt(1));
// console.log(html.endsWith('sdfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,3));
// console.log(html.slice(0, 4);
// console.log(html.split('>'));   
// console.log(html.replace('this','it'));
let fruit1 = 'orange';
let fruit2 = 'apple';
let html1 = `hello ${name} <h1> this is heading </h1> <p> you like ${fruit1} and ${fruit2}`;

document.body.innerHTML = html1;

























