$(document).ready(function () {
  const makeMadLib = function () {

    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const name = $('#person').val();

    const story = `<p>${ name } really likes ${ adjective } ${ noun }</p>`;

    $('#story').prepend( story );

  };

  $('#lib-button').on('click', makeMadLib);
});
