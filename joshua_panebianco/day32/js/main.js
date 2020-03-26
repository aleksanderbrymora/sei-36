console.log("Hey Josh")

$(document).ready(function () {
 $('form').on('submit', function (event) {
  event.preventDefault();

	const city = $('#city').val();
	console.log(city + " is a nice place");
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=1c559f6da7b798425340bdb84510beab`;
  console.log(url);
	$.ajax(url).done(function (data) {
		const description = data.weather[0].description;
		const temp = (data.main.temp - 272.15).toFixed(0)
		console.log(temp);
    $('#location').text(city);
		$('#temp').text(temp);
		$('#desc').text(description);
	 })
	});
});
