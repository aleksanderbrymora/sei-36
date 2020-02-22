// get the button
// define a function
// attach the function to the button
//
const button = document.getElementById('lib-button');
const makeMadLib = function () {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const name = document.getElementById('person').value;
  const story = `${name} likes ${adjective} ${noun}`;
  story = document.getElementById('story').innerHTML;
};
button.addEventListener('click', makeMadLib);
