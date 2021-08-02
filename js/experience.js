$(document).ready(function () {
  // .cover 높이 지정
  $(window).trigger("scroll");
  $(".cover").css("height", $(window).height());

  // #scrollBtn 버튼 클릭하면 스크롤바를 .overview 위치로 내림
  $('#scrollBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: $('.overview').offset().top}, 'slow');
  });
  
  // 스크롤 이벤트
  $(window).on('scroll', function () {
    const scrollY = $(this).scrollTop() + $(this).height()*2/3; // 전체 창의 2/3 추가

    // .movetop 애니메이션
    $('.minumsa section').each(function () {
      if (scrollY > $(this).offset().top) $(this).find('.movetop').addClass('on');
      else $(this).find('.movetop').removeClass('on');
    });
  });
});