(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $('.preloader').fadeOut(1000);
    background();
  });
  $(document).ready(function () {
    // Lightcase 
    $('a[data-rel^=lightcase]').lightcase();
    //wow.min.js
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: function (box) {},
      scrollContainer: null
    });
    wow.init();
  });
  //Create Background Image
  function background() {
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  }
  // counter 
  $('.counter').countUp({
      'time': 1500,
      'delay': 10
  });
  //Menu Dropdown Icon Adding
  $("ul>li>.sub-menu").parent("li").addClass("menu-item-has-children");
  // drop down menu width overflow problem fix
  $('ul').parent().hover(function () {
    var menu = $(this).find("ul");
    var menupos = $(menu).offset();
    if (menupos.left + menu.width() > $(window).width()) {
      var newpos = -$(menu).width();
      menu.css({
        left: newpos
      });
    }
  });
  //MenuBar
  $(document).on('click', '.header-bar', function () {
      $(".menu").toggleClass("active");
      $(".header-bar").toggleClass("active");
  });
  //Mobile Menu Accordion
  $(".menu>li>a, .menu ul.sub-menu>li>a").on("click", function () {
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
      } else {
        element.addClass("open");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
      }
  });

  // Scroll To Top 
  var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
  });

  // Header Sticky Here
  var fixed_top_three = $(".header-bottom");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 203) {
        fixed_top_three.removeClass("header-fixed");
      } else {
        fixed_top_three.addClass("header-fixed");
      }
  });
  // body-building Slider
  var swiper = new Swiper('.body-building-slider', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.body-building-pagination',
      clickable: true,
    },
  });
  //Client SLider
  var swiper = new Swiper('.overview-slider', {
    pagination: {
      el: '.overview-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
  });
  // body-building Slider
  var swiper = new Swiper('.feature-slider , .expert-slider', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      1199: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.common-next',
      prevEl: '.common-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });
  //Feature Pagination
  $(document).on('click', '.common-navigation .navigation', function () {
    $(".navigation").removeClass('active');
      $(this).addClass('active');
  })
  // Sponsor Slider
  var swiper = new Swiper('.sponsor-slider', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });
  var swiper = new Swiper('.blog-slider', {
    navigation: {
      nextEl: '.blog-prev',
      prevEl: '.blog-next',
    },
    loop:true,
  });

})(jQuery);