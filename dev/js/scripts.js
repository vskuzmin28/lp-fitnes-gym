// youtube player

$('.main-screen__fake-preview').click(function(e){
  e.preventDefault();
  $("#startVideo")[0].src += "&autoplay=1";
  $('.main-screen__fake-preview').hide();
})

// call popup

$('.link-call-expert').click(function(e){
  e.preventDefault();
  $('.call-expert').bPopup({
    closeClass:'popup__icon-close',
      amsl: 0,
      positionStyle: 'fixed',
    })
})

$('.link-manager-consultation').click(function(e){
  e.preventDefault();
  $('.manager-consultation').bPopup({
    closeClass:'popup__icon-close',
      amsl: 0,
      positionStyle: 'fixed',
    })
})

$('.link-make-an-order').click(function(e){
  e.preventDefault();
  $('.make-an-order').bPopup({
    closeClass:'popup__icon-close',
      amsl: 0,
      positionStyle: 'fixed',
    })
})

// functional call form

$('.call-expert, .manager-consultation, .make-an-order, .popup-thanks').hide();

$('.send-form').submit(function() {
      $.post($(this).attr('action'), $(this).serialize(), function(res) {         
     if (res.success == 1) {
         $('.call-expert, .manager-consultation, .make-an-order').bPopup().close();
           $('.popup-thanks').bPopup({
             closeClass:'сlose',
                 amsl: 0
            })
           setTimeout(function(){$('.popup-thanks').bPopup().close();}, 3000);
       }else{
       alert(res.text)
       }
    }, 'json');
    return false;
  })

// scroll smooth

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});

// wow animate elements

new WOW().init()

// sliders

// portfolio

$('.portfolio-block').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 500,
  maxwidth: 1040,
  //namespace: "centered-controls"
})

// works

$('.works-block').responsiveSlides({
  auto: false,
  pager: true,
  nav: true,
  speed: 500,
  maxwidth: 514,
  namespace: "works-controls"
})

// actions

$('.actions-block').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 500,
  maxwidth: 1040,
  //namespace: "centered-controls"
})

// reviews

$('.reviews-block').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 500,
  maxwidth: 1040,
  //namespace: "centered-controls"
})

// view full review in slider

$('.review-show').click(function(e){
  e.preventDefault();
  $('.review-full').toggle();
  $('.review-show').hide();
})

// mobile icon menu

$('.mobile-icon-menu').click(function(e){
  e.preventDefault();
  $('.mobile-menu-content').toggle();
})