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