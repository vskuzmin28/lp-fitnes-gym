// call popup

$('.link-call-popup').click(function(e){
  e.preventDefault();
  $('.call-popup').bPopup({
    closeClass:'popup__icon-close',
      amsl: 0,
      positionStyle: 'fixed',
    })
})

// functional call form

$('.call-popup, .popup-thanks').hide();

$('.send-form').submit(function() {
      $.post($(this).attr('action'), $(this).serialize(), function(res) {         
     if (res.success == 1) {
         $('.call-popup').bPopup().close();
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

$('.club-photos').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 0,
  maxwidth: 1070,
  //namespace: "centered-controls"
})

$('.club-photos-mobile').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 0,
  maxwidth: 1070,
  //namespace: "centered-controls"
})