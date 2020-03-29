$('document').ready(function(){
  $('#name').on('focus',function(){
    $('header').addClass('active');
  }).on('blur',function(){
    $('header').removeClass('active');
  })
});
