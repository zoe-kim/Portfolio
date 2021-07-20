$(document).ready(function () {

  // 스크롤 이벤트 선언
  $(window).on('scroll', function () {
    // scrollY = 스크롤바의 수직이동거리
    const scrollY = $(this).scrollTop();
    //console.log(scrollY);

    // 스크롤바의 수직이동거리가 813픽셀 이상이면 .header.active
    if (scrollY >= 813) $('.header').addClass('active');
    else $('.header').removeClass('active');

    // 스크롤바의 수직이동거리가 100픽셀 이상이면  #topBtn에 fadeIn
    if (scrollY >= 100) $('#topBtn').stop().fadeIn();
    else $('#topBtn').stop().fadeOut();
  });

  // #topBtn 버튼을 클릭하면 스크롤바를 0으로 만들기
  $('#topBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: 0}); // html -> ie, body -> 크롬
  });

  // PC 네비게이션 클릭시 상단으로 부드럽게 이동
  $('.pc_nav ul li a').on('click', function () {
    const $tg = $( $(this).attr('href') );
    console.log($tg);

    $('html, body').stop().animate({scrollTop: $tg.offset().top}, 'slow');
    return false;  // a 태그의 기본 기능 제한!!!
  });

});