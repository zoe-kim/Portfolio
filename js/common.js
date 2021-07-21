$(document).ready(function () {
  
  // PC 네비게이션 클릭시 이동
  $('.pc_nav ul li a').on('click', function (e) {
    e.preventDefault(); // a 태그의 기본 기능 제한!!!
    const $tg = $( $(this).attr('href') );

    $('html, body').stop().animate({scrollTop: $tg.offset().top}, 'slow');
  });
  
  // 스크롤 이벤트
  $(window).on('scroll', function () {
    const scrollY = $(this).scrollTop();
    console.log(scrollY);

    // .header 상단 고정
    if (scrollY >= $('#about').offset().top) $('.header').addClass('active');
    else $('.header').removeClass('active');

    // #topBtn 등장
    if (scrollY > 0) $('#topBtn').fadeIn();
    else $('#topBtn').fadeOut();
  });
  
  // #topBtn 버튼을 클릭시 상단으로 이동
  $('#topBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: 0}); // html -> ie, body -> 크롬
  });


});