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