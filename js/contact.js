$(document).ready(function () {
  // .contact_btn에 마우스 진입 시 애니메이션
  $('.contact_btn').on({
    mouseenter: function () {
      $(this).parent().addClass('on');
    },
    mouseleave: function () {
      $(this).parent().removeClass('on');
    }
  });

});