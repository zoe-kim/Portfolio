$(document).ready(function () {
  // .contact_btn에 마우스 진입 시 애니메이션
  $('.contact_btn').hover(
    function () { //mouseenter
      $('.contact_btn span').stop().animate({top: 10, left: 10}, 'fast');
      if (!$('.contact_bg img').is(':animated')){
        $('.contact_bg img').stop().animate({bottom: '+=130', opacity: 1}, 300);
      }
      $('.contact_wrap strong').stop().animate({opacity: 1}, 300);
    }, 
    function () { //mouseleave
      $('.contact_btn span').stop().animate({top: 0, left: 0}, 'fast');
      if (!$('.contact_bg img').is(':animated')){
        $('.contact_bg img').stop().animate({bottom: '-=130', opacity: 0}, 300);
      }
      $('.contact_wrap strong').stop().animate({opacity: 0}, 300);
    }
  );

});