$(document).ready(function () {
  // .cover 높이 지정
  $(window).trigger("scroll");
  $(".cover").css("height", $(window).height());

  // #scrollBtn 버튼 클릭하면 스크롤바를 .overview 위치로 내림
  $('#scrollBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: $('.overview').offset().top}, 400, 'swing');
  });
  
});