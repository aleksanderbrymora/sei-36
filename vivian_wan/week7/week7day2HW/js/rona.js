$(document).ready(function () {
    $('form').on('submit', function (event) {
      event.preventDefault();
  
      const ronaByCountry = $('#country_rona').val();
      
      const url = `https://api.covid19api.com/country/${ ronaByCountry }/status/confirmed`;
      console.log (url)

      $.ajax(url).done(function (data) {

        $('div').after(`<p> Date: ${ data[data.length-1].Date }</p>`);

        $('div').after(`<p> ${ data[data.length-1].Cases } cases have been confirmed. </p>`);
        $('h1').after(`<p>Country: ${ ronaByCountry }</p>`);


      }).fail(function () {
        alert('Something bad happen');
      })
    });
  });