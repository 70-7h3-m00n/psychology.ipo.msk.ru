$(document).ready(function () {
  /*Убирание placeholder*/
  $('input, textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '')
  })
  $('input, textarea').blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'))
  })

  // Слайдер учителей
  if ($('.teachers-slider').length) {
    $('.teachers-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      speed: 1000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1259,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1019,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600
          }
        }
      ]
    })
  }

  // Слайдер похожих товаров
  if ($('.reviews-slider').length) {
    $('.reviews-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 1200,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600
          }
        }
      ]
    })
  }

  /*модалка*/
  if ($('.popup-open').length) {
    $('.popup-open').magnificPopup({
      removalDelay: 300,
      fixedContentPos: true,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr('data-effect')
        }
      },
      midClick: true
    })
  }

  // Скролл якоря
  $('.to-scroll').click(function () {
    var elementClick = $(this).attr('href')
    var destination = $(elementClick).offset().top
    jQuery('html:not(:animated),body:not(:animated)').animate(
      { scrollTop: destination },
      1000
    )
    return false
  })

  // работа мобильного меню
  $('.mobile-buter').click(function () {
    $('.mobile-buter').hide(0)
    $('.mobile-buter-hidden').show(0)
    $('.mobile-overlay').fadeIn(300)
    $('.header-content').slideDown(300)
  })

  $('.mobile-overlay, .mobile-buter-hidden, .to-scroll').click(function () {
    if ($(window).width() <= 1019) {
      $('.mobile-buter-hidden').hide(0)
      $('.mobile-buter').show(0)
      $('.mobile-overlay').fadeOut(300)
      $('.header-content').slideUp(300)
    }
  })

  /*Вывод всех специальностей*/
  $('.more-specialties').click(function (e) {
    e.preventDefault()
    $('.specialties-list li').slideDown(300)
    $(this).slideUp(300)
  })
})

/*анимации*/
wow = new WOW({
  mobile: false
})
wow.init()
