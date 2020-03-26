$(document).ready(function() {

  const initMap = function () {
    let mymap = L.map('mapid').setView([50, 0], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 2,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(mymap);

    return mymap;
  }

  const addMarker = function() {
    let iss = L.marker([50, 0]).addTo(mymap);
    return iss;
  }

  const addCircle = function() {
    let isscirc = L.circle([50, 0], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 1000000
    }).addTo(mymap);
    return isscirc;
  }




  // function to move ISS and map
  const moveISS = function() {
    $.ajax('http://api.open-notify.org/iss-now.json?callback?').done(function(data) {
      let lat = data.iss_position.latitude;
      let lon = data.iss_position.longitude;

      $('#lat').html(lat);
      $('#lon').html(lon);

      iss.setLatLng([lat, lon]);
      isscirc.setLatLng([lat, lon]);
      mymap.panTo([lat, lon], animate=true);
    }).fail( function() {
      console.log('Failed to load');
    });

  };

  // initialise functions
  let mymap = initMap();
  let iss = addMarker();
  let isscirc = addCircle();

  moveISS();


  // initMap();
  setInterval(moveISS, 2000);









});
