console.log('this is tut 17');

document.getElementById('heading').addEventListener
('click', function (e){
    console.log('you have clicked the heading');
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);

    variable = e.target.id;
    variable = e.offsetX;

    console.log(variable);
    // location.href = '//codewithharry.com';
})
























