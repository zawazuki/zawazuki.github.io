$(function(){
    function toggleNav() {
        var body = document.body;
        var hamburger = document.getElementById('js-hamburger');
        var blackBg = document.getElementById('js-black-bg');
      
        hamburger.addEventListener('click', function() {
          body.classList.toggle('nav-open');
        });
        blackBg.addEventListener('click', function() {
          body.classList.remove('nav-open');
        });
      }
      toggleNav();

      var imgHeight = $('#hero').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
      var header = $('#header'); //ヘッダーコンテンツ

      $(window).on('load scroll', function(){
        if ($(window).scrollTop() < imgHeight) {
        //メインビジュアル内にいるので、クラスを外す。
          header.removeClass('headerColor-default');
        }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
          header.addClass('headerColor-default');
        }
      });

      new Swiper( '.swiper-container', {
        speed: 400,
        width: 600,
        spaceBetween: 40,
        loop: true,
        loopedSlides: 5,
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          }
        }
      });

      // smooth scroll
      $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

      

});
