(function() {
  'use strict';
  $('.auth-btn').click(function(event) {
    event.preventDefault();
    $('.card__content').css("transform","rotateY(180deg)");
    $(this).css("display","none");
    setTimeout( function(){
    $('.card__content').css("display","none"); 
    $('.auth-form').css("display","block");
    },1000);
    })

  $('.index-btn').click(function(event) {
    event.preventDefault();
    $('.auth-form').css("transform","rotateY(180deg)");
    $('.card__content').css("transform","rotateY(360deg)");
    setTimeout( function(){
    $('.auth-form').css("display","none"); 
    $('.card__content').css("display","block");
    $('.auth-btn').css("display","inline-block");
    $('.auth-form').css("transform","rotateY(360deg)");
    },1000);
    })
 
})();