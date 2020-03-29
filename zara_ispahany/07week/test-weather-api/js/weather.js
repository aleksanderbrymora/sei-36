$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    const cityName = $('#city-name').val();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=6538fbb10f17f6b570b4fc4b71b109fe`;
    $.ajax(url).done(function (data) {

      // Get info
      const details = data.weather[0].description;
      const tempKelvin = data.main.temp;
      const tempCelsiusFormula = tempKelvin-273.15;
      const tempCelsius = tempCelsiusFormula.toFixed(1);

      $('#info').html(tempCelsius);

      console.log(data);
      console.log(details);
      console.log(tempKelvin);
      console.log(tempCelsius);
    }).fail(function () {
      alert('Learn to spell!');
    })
  })
});
