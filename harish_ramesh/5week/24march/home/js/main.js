$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    const city = $('#city').val();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8614b6e20144dfb00dd73ef59114d927`;
    $.ajax(url).done(function (data) {
      const weather = data.main.temp;
      $( "#data" ).append( `<p>The temp in ${city} is : ${(weather-272.15).toFixed(1)}'c</p>` );
    }).fail(function () {
      alert('Something bad happen');
    })
  });
});
