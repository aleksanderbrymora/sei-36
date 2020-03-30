$(document).ready(function () {
  $('form').on('submit', function (event){
   event.preventDefault();

   // get the book booktitle
   const cityName = $('#city_name').val();
   // create the google books url
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d465cedaf4b8a44c0dbf26ebe2d8fa75`;
   // make the request
   $.ajax(url).done(function (data){
     // console.log(data);

     const result = data.weather[0].main
     // const result_temp = data.main.temp
     // const result_temp = data.weather.main.temp
     console.log( result );
     $('#result1').after(`<p>${ result }</p>`);
     // $('h1').after(`<p>${ result_temp }</p>`);
     //done () get the cover, display the cover
   }).fail(function (){
     alert('Something bad happened')
   })
  })
});
