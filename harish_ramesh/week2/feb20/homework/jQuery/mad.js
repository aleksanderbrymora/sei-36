// const button = document.getElementById('lib-button');
// const makeMadLib = function () {
//   const noun = document.getElementById('noun').value;
//   const adjective = document.getElementById('adjective').value;
//   const name = document.getElementById('person').value;
//
//   const story = `${ name } really likes ${ adjective } ${ noun }`;
//   document.getElementById('story').innerHTML = story;
// };
//
// button.addEventListener('click', makeMadLib);

const $button = $("#lib-button");

const makeMadeLib = function(){
  const noun = $("#noun").html();
  const adjective = $("#adjective").html();
  const name = $("#person").html();
  const story = `${name} really likes ${adjective} many ${noun}`;
  $("#story").html(story);
};

$('button').click(makeMadeLib);
