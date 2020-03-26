const getApiData = function(country,cases){
      const url= `https://api.covid19api.com/total/country/${country}/status/${cases}`;
      $.ajax(url).done(function(result){
        $('.box').show();
        $('#country_header').show();
        $('#date').show();
        $('#country_header').html(`${$('#country').val()} Cases by the numbers`);
        $(`#${cases}_text`).html(`${result[result.length - 1].Cases}`);
        let date = new Date(result[result.length - 1].Date);
        date.toLocaleString();
        $('#date').html(`As of ${date}`);
      }).fail(function(){
        alert("Something went wrong :(");
      });
};

$(document).ready(function(){
let country = '';
$('.box').hide();
$('#country').focus(function(){
  $('.box').hide();
  $('#country_header').hide();
  $('#date').hide();
});
$('form').on('submit', function(event){
  event.preventDefault();
  $.ajax('https://api.covid19api.com/countries').done(function(result){
    for (let i = 0; i < result.length; i++) {
      if (result[i].Country.includes($('#country').val())){
        country = result[i].Slug;
      }
    }
    if (country !== ''){
      getApiData(country,'confirmed');
      getApiData(country,'recovered');
      getApiData(country, 'deaths');
    } else {
      alert("Data not found");
    }
    country = '';
    }).fail(function(result){
      alert("Fail Whale");
      });
  });
});
