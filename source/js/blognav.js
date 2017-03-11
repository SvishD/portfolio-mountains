//  sticky blog nav

$(document).ready(function() {
  var stickyNavTop = $('.blog-nav').offset().top;
   
  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();
        
  if (scrollTop > stickyNavTop) { 
        $('.blog-nav').addClass('sticky');
    } else {
        $('.blog-nav').removeClass('sticky'); 
    }
  };
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});