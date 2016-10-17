// mouse parallax

$(document).ready(function() {
  var
      layer = $('.parallax').find('.parallax__layer');
  layer.map(function (key, value) {
    var 
        bottomPosition = ((window.innerHeight/2) * ((key + 1) / 250));
    $(value).css({
      'bottom': '-' + bottomPosition + 'px',
      'transform': 'translate3d(0px, 0px, 0px)'
    });
  });

  $(window).on('mousemove', function(e) {
    var 
        mouse_dx = e.pageX,
        mouse_dy = e.pageY,
        w = (window.innerWidth/2) - mouse_dx,
        h = (window.innerHeight/2) - mouse_dy;

        layer.map(function (key, value) {
          var
              bottomPosition = ((window.innerHeight/2) * ((key + 1) / 250)),
              widthPosition = w * ((key + 1) / 250),
              heightPosition = h * ((key + 1) / 250);

          $(value).css({
            'bottom': '-' + bottomPosition + 'px',
            'transform': 'translate3d(' + widthPosition + 'px,' + heightPosition + 'px, 0px)'
          });

        });

  }); 
  
})



//map
var map = (function () {

function init() {
    var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: {
        lat: 59.94029288, 
        lng: 30.31376147
      },
      zoom: 13,
      disableDefaultUI: true,
      scrollwheel: false,
      draggable: true,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2bd3b7"},{"visibility":"simplified"}]}]
    }

    var map = new google.maps.Map(mapCanvas, mapOptions);

  };

  return {
    init: init
  };

})();


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



// slider

$(document).ready(function(){
  if ($('.slider').length) {
    slider.init();
  }
});

var slider = (function(){

  var
      flag = true;

  return {
    init: function() {
      var _this = this;

      //Slider dot navigation
      _this.createDots();


      $('.slider__arrow').on('click', function(e){
        e.preventDefault();

        var
            $this = $(this),
            slides = $this.closest('.slider').find('.slider__item'),
            activeSlide = slides.filter('.slider__item--active'),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev(),
            firstSlide = slides.first(),
            lastSlide = slides.last();

        if ($this.hasClass('slider__arrow--right')) {
          
          if (nextSlide.length) {
            _this.moveSlide(nextSlide,'forward');
          } else {
          _this.moveSlide(firstSlide,'forward');
        }


        } else {

            if (prevSlide.length) {
              _this.moveSlide(prevSlide,'backward');
            } else {
            _this.moveSlide(lastSlide,'backward');
            }
        }

      });

      $('.slider__dots-link').on('click', function(e){
        e.preventDefault();

        var
            $this = $(this),
            dots = $this.closest('.slider__dots').find('.slider__dots-item'),
            activeDot = dots.filter('.active'),
            dot = $this.closest('.slider__dots-item'),
            curDotNum = dot.index(),
            direction = (activeDot.index() < curDotNum) ? 'forward' : 'backward',
            reqSlide = $this.closest('.slider').find('.slider__item').eq(curDotNum);

        _this.moveSlide(reqSlide,direction);
            

      });

    },

    moveSlide: function(slide, direction){
      var
          _this = this,
          container = slide.closest('.slider'),
          slides = container.find('.slider__item'),
          activeSlide = slides.filter('.slider__item--active'),
          slideWidth = slides.width(),
          duration = 500,
          reqCssPosition = 0,
          reqSlideStrafe = 0;

      if (flag) {

        flag = false;

        if (direction === 'forward') {
          reqCssPosition = slideWidth;
          reqSlideStrafe = - slideWidth;
        } else if (direction === 'backward') {
          reqCssPosition = - slideWidth;
          reqSlideStrafe = slideWidth;
        }

        slide.css('left', reqCssPosition).addClass('inslide');

        var movableSlide = slides.filter('.inslide');

        activeSlide.animate({left: reqSlideStrafe}, duration);

        movableSlide.animate({left: 0}, duration, function(){
          var $this = $(this);

          slides.css('left','0').removeClass('slider__item--active');

          $this.toggleClass('inslide slider__item--active');

          _this.setActiveDot(container.find('.slider__dots'));

          flag = true;

        });
      }

      
    },

    createDots: function(){
      var 
          _this = this,
          container = $('.slider');
      var
          dotMarkup = '<li class="slider__dots-item"> \
                        <a class="slider__dots-link" href="#">Slide</a> \
                      </li>';

      container.each(function(){
        var
            $this = $(this),
            slides = $this.find('.slider__item'),
            dotContainer = $this.find('.slider__dots');

        for (var i = 0; i < slides.length; i++) {
          dotContainer.append(dotMarkup);
        }

        _this.setActiveDot(dotContainer);
      });


    },

    setActiveDot: function(container) {
      var
          slides = container.closest('.slider').find('.slider__item');

      container
          .find('.slider__dots-item')
          .eq(slides.filter('.slider__item--active').index())
          .addClass('slider__dots-item--active')
          .siblings()
          .removeClass('slider__dots-item--active');
    },

  }

})();



//preloader

$(function () {

  var imgs = [];

  $.each($('*'), function () {
    var
      $this = $(this),
      background = $this.css('background-image'),
      img = $this.is('img');

    if (background != 'none') {
      var path = background.replace('url("', '').replace('")', '');
      imgs.push(path);
    }

    if (img) {
      var path = $this.attr('src');

      if (path) {
        imgs.push(path);
      }
    }
  });
  
  var percentsTotal = 1;

  for (var i = 0; i < imgs.length; i++) {
    var image = $('<img>', {
      attr: {
        src: imgs[i]
      }
    });

    image.on({
      load : function () {
        setPercents(imgs.length, percentsTotal);
        percentsTotal++;
      },

      error : function () {
        percentsTotal++;
      }
    });
  }

  function setPercents(total, current) {
    var percent = Math.ceil(current / total * 100);

    if (percent >= 100) {
      $('.preloader').fadeOut();
    }

    $('.preloader__percents').text(percent + '%');
  }
});



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




// blog nav highlight

$(document).ready(function() {
  showArticle(window.location.hash, false);

  $('.blog-nav__link').on('click', function(e){
    e.preventDefault();

    var
        article = $(this).attr('href');

    showArticle(article, true);
  });
});

$(window).scroll(function(){
  checkArticle()
});

function checkArticle(){
  $('.article').each(function(){
    var
        $this = $(this),
        topEdge = $this.offset().top-200,
        bottomEdge = topEdge + $this.height(),
        wScroll = $(window).scrollTop();

    if (topEdge < wScroll && bottomEdge > wScroll) {
      var
          currentId = $this.data('article'),
          reqLink = $('.blog-nav__link').filter('[href="#' + currentId + '"]');

      reqLink.closest('.blog-nav__item')
      .addClass('blog-nav__item--active')
      .siblings()
      .removeClass('blog-nav__item--active');
      
      window.location.hash = currentId;
    }
  });
}

function showArticle(article, isAnimate) {
  var
      direction = article.replace(/#/, ''),
      reqArticle = $('.article').filter('[data-article="' + direction + '"]'),
      reqArticlePos = reqArticle.offset().top;

  if (isAnimate) {
    $('body, html').animate({scrollTop: reqArticlePos}, 500);
  } else {
    $('body, html').scrollTop(reqArticlePos);
  }
}



