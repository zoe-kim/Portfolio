$(document).ready(function () {
  // 스크롤 이벤트 선언
  $(window).on('scroll', function () {
    // scrollY = 스크롤바의 수직이동거리
    const scrollY = $(this).scrollTop();
    console.log(scrollY);

    // 스크롤바의 수직이동거리가 813픽셀 이상이면 .header.active
    if (scrollY >= 813) $('.header').addClass('active');
    else $('.header').removeClass('active');

    // 스크롤바의 수직이동거리가 100픽셀 이상이면  #topBtn에 fadeIn
    if (scrollY >= 100) $('#topBtn').stop().fadeIn();
    else $('#topBtn').stop().fadeOut();
  });

  // top 이동 버튼을 클릭하면 스크롤바를 0으로 만들기
  $('#topBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: 0}); // html -> ie, body -> 크롬
  });
});