//flipper

(function() {
  'use strict';
  $('.auth-btn').click(function(event) {
    event.preventDefault();
      $(this).css('opacity', '0');
      $('.card').addClass('card--flipped');
    })

  $('.index-btn').click(function(event) {
    event.preventDefault();
      $('.card').removeClass('card--flipped');
      $('.auth-btn').css('opacity', '1');
    })
 
})();