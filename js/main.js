$(document).ready(function () {
  // 메인페이지 높이 지정
  $(window).trigger("scroll");
  $("#main").css("height",$(window).height());

  // #scrollBtn 버튼 클릭하면 스크롤바를 #about 위치로 내림
  $('#scrollBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: $('#about').offset().top}, 400, 'swing');
  });
  
});