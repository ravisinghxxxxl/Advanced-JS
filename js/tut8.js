console.log('tutorial 8');

const age = 28;
// const vary = 34;
const doesDrive = true;

if (age != 19) {
    console.log('age not 19');

} if (age !== 65) {

    console.log('age is not 65');
} else {

    console.log('age is not 19');
}

if (typeof vary !== 'undefined') {
    console.log('vari is defined');
} else {
    console.log('vary is not defined');
}


if (doesDrive || age > 18) {
    console.log('You can drive');
} else {
    console.log('you can not drive');
}


// console.log(age == 45? 'age is 45': 'age is not 45');

switch (age) {
    case 18:
        console.log('you are 18');
        break;
 
        case 28:
        console.log('you are 28');
        break;

        case 38:
        console.log('you are 38');
        break;

    default:
        console.log('you are unknown age');
        break;
}









