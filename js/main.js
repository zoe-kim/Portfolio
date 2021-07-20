$(document).ready(function () {

  // #scrollBtn 버튼 클릭하면 스크롤바를 #about 위치로 내림
  $('#scrollBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: $('#about').offset().top}, 'slow');
  });
  
});