$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    $( "#imgs").empty();

    const armorName = $( '#armor-name' ).val();
    const url = "https://mhw-db.com/armor/sets?q={%22name%22:%22"+ armorName +"%22}";

    $.ajax(url).done(function (data) {

      // GET AND DISPLAY ARMOUR RANK/TITLE
      const armorRank = data[0].rank;
      const armorTitle = data[0].name;
      $('#armor-title').html(armorTitle);
      $('#armor-rank').html(armorRank.toUpperCase());

      // ARMOUR SET IMAGES
      const armorArray = data[0].pieces;
      $.each(armorArray, function(index) {
        let armorPiece = data[0].pieces[index].assets.imageFemale;
        $('#imgs').append('<img src="'+ armorPiece +'"/>');
      })
    }).fail(function () {
      alert('Learn to spell!');
    })
  })
});
