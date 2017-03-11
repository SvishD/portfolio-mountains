// scroll arrows

$(document).ready(function() {
  scrollArrows.init();
});

var scrollArrows = (function () {


  function init () {
    _setUpListners();
  };


  function _setUpListners () {
    $('.down__link').on('click', _scrollDown);
    $('.up__link').on('click', _scrollUp);
  };


  function _scrollUp(e) {
    e.preventDefault();
    _scrollTo( '0', 500 );
  };


  function _scrollDown(e) {
    e.preventDefault();
    _scrollTo( $(".header").height() , 500);
  };


  function _scrollTo(pos, duration){
    $('html, body').animate({scrollTop: pos}, duration);
  }


  return {
    init: init
  };

})();