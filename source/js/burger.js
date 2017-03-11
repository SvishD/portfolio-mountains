// burger-menu

$(document).ready(function(){
    burgerMenu.init();
});

var burgerMenu = (function () {


  function init () {
    _setUpListners();
  };


  function _setUpListners () {
    $('.menu').on('click', _toggleMenu);
  };


  function _toggleMenu() {
    $(this).toggleClass('burger-svg--active');
    $('.overlay').toggleClass('overlay--active');
  };


  return {
    init: init
  };

})();