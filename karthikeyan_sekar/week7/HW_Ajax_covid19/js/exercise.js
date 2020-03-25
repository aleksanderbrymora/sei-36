$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    const country = $('#country').val();
    const url = `https://api.covid19api.com/summary?q=country:${ country }`;
    $.ajax(url).done(function (data) {
      let countrydetails = data.Countries.find( x => x.Country == country);
      $('#NewConfirmedCases').text(`NewConfirmedCases in ${country} is :${countrydetails.NewConfirmed} with ${countrydetails.TotalConfirmed}confirmed cases, ${countrydetails.NewDeaths} New Deaths, ${countrydetails.NewConfirmed} New confirmed cases, ${countrydetails.TotalDeaths} total deaths, ${countrydetails.NewRecovered} people newly recovered, ${countrydetails.TotalRecovered} people recovered totally`);
    }).fail(function () {
      alert('Something bad happen');
    })
  });
});
