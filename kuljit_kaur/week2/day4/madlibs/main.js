// Mad Libs
// Start with this webpage, which has several input elements and a button:
// * Create a new Javascript file and link to it with a script tag at the bottom.
// * Add an event listener to the button so that it calls a makeMadLib function when clicked.
// * In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")


const button = $('#lib-button');
const makeMadLib = function() {
  const noun = $('#noun').val();    //in DOM : $('#noun')[0].value();
  const adjective = $('#adjective').val();
  const name = $('#person').val();

  const story = `${ name } really likes ${ adjective } ${ noun }`;
  // const story = `<p>{ name } really likes ${ adjective } ${ noun }</p>`;
  $('#story').html(story);
  // $('#story').prepend(story);
};

button.click(makeMadLib);  //or $("lib-button").on("click",makeMadLib);
