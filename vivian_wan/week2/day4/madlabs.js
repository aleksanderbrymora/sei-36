// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

/*

const button = document.getElementById('lib-button')

const makeMadLab = function () {    
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;

console.log(noun, adjective, person)
}

button.addEventListener('click', makeMadLab );

*/

//Using JQuery

const makeMadLab = function () {   
    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const person = $('#person').val();
    console.log(person, adjective, noun);

    let p = $('<p>');
    let msg = `This ${person} likes ${noun} in ${adjective}`;
    p.html(msg);
    $('#story').append(p);
}

$('#lib-button').click(makeMadLab);


