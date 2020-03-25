$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();

    const websiteURL = $('#website_url').val();
    console.log(websiteURL);
    const websiteYear = $('#website_year').val();
    console.log(websiteYear);

    const url = `https://archive.org/wayback/available?url=${websiteURL}&timestamp=${websiteYear}0101000000`

    $.ajax(url).done(function(data) {
      console.log(data);
    }).fail(function() {
      alert("Didn't work, too bad so sad.");
    })

  });

});
