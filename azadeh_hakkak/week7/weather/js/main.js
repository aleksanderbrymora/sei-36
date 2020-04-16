$(document).ready(function (){
  $('form').on('submit', function (event) {
    event.preventDefault();
    const city = $('#city_name').val();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&units=metric&appid=314a9dde0fea27340dcf6b0df2e298fc`;
    $.ajax(url).done(function (data){
      const title = data.name;
      $('#title').text(title);
      const temperature = data.main.temp;
      $('#temperature').text(temperature)
      const description = data.weather[0].description;
      $('#description').text(description);
      const humidity = data.main.humidity;
      $('#humidity').text(humidity);
      const long = data.coord.lon;
      $('#longitude').text(long);
      const lati = data.coord.lat;
      $('#latitude').text(lati);

    }).fail(function () {
      alert('Something is wrong');
    })
  });
});
