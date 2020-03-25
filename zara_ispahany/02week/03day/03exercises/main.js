// - Create a new Javascript file and link to it with a script tag at the bottom. >>
// - Add an event listener to the button so that it calls a makeMadLib function when clicked.
// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

//get the button
//define the function
//attach the function to the button

 const button = document.getElementById('lib-button'); //get the button

 const makeMadLib = function() { //define the function
   const noun = document.getElementById('noun').value;
   const adjective = document.getElementById('adjective').value;
   const name = document.getElementById('person').value;
   alert(`${name} really likes ${adjective} ${noun}.`); //joel did it via const = story and innerHTML!!
 };
 button.addEventListener('click', makeMadLib); //attach the function to the button
