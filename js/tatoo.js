$(function(){
   // Menu mobile
   $('.burger-menu').click(function(e){
      $('.menu-mobile').slideDown(); 
      e.preventDefault();
   });


   $('.close-menu').click(function(e){
      $('.menu-mobile').slideUp(); 
      e.preventDefault();
   });

   $('.menu-mobile ul').onePageNav({
      end : function() {
         $('.menu-mobile').slideUp(); 
      } 
   });
   // OnePage nav
      $('#menu').onePageNav();
 //Scroll a propos

 $('.go').click(function(e){
    var elem = $('#skills');
    $('html, body').animate({scrollTop : elem.offset().top}, 750);
    e.preventDefault();
 });
 //Scroll a carte
 $('.goCarte').click(function(e){
   var elem = $('#menuPlat');
   $('html, body').animate({scrollTop : elem.offset().top}, 750);
   e.preventDefault();
});
 //Scroll a gallery
 $('.goPhoto').click(function(e){
   var elem = $('#gallery-photo');
   $('html, body').animate({scrollTop : elem.offset().top}, 750);
   e.preventDefault();
});
 //Scroll contact
 $('.goPhoto').click(function(e){
   var elem = $('#gallery-photo');
   $('html, body').animate({scrollTop : elem.offset().top}, 750);
   e.preventDefault();
});

//menu change

$(window).scroll(function(){

   var Hscroll = $(this).scrollTop();
   if (Hscroll > 300) {
      $('header').addClass('fix-white');
   }else{
      $('header').removeClass('fix-white');
   }

   var opScroll = Hscroll / 500;
   $('.logo').css({ opacity : 1 - opScroll});

});







});