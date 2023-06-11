
$(function () {
  $('.btn-qrcode').click(function () {
    $('.popup-qrcode').addClass('active')
  })

  $('.popup-qrcode').click(function () {
    $('.popup-qrcode').removeClass('active')
  })

  $('.btn-search').click(function () {
    const hasUnfold = $('#header').hasClass('unfold');
    if (hasUnfold) {
      $('#header').removeClass('unfold')
    } else {
      $('#header').addClass('unfold')
    }
  })

  $('.btn-menu').click(function () {
    $('#mb-menu').addClass('unfold')
  })

  $('#mb-menu .btn-close').click(function () {
    $('#mb-menu').removeClass('unfold')
  })
  $('.menu-mask').click(function () {
    $('#mb-menu').removeClass('unfold')
  })

  var toggleSearch = $('[data-class="searchClose"]');
  toggleSearch && toggleSearch.click(function () {
    $('#header').removeClass('unfold')
  })

  $('#gotop').click(function () {
    $('body,html').animate({
      'scrollTop': '0'
    }, 600);
  })

})
