$(document).ready(function () {
  // 네비게이션 클릭시 이동
  $('.pc_nav ul li a').on('click', function (e) {
    e.preventDefault(); // a 태그의 기본 기능 제한!!!
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 400, 'swing');
  });

  // #topBtn 버튼을 클릭시 상단으로 이동
  $('#topBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: 0}); // html -> ie, body -> 크롬
  });
  
  // 스크롤 이벤트
  $(window).on('scroll', function () {
    // #topBtn 등장
    if ($(this).scrollTop() < 20) {
      gsap.to('#topBtn', {display: 'none', opacity: 0, duration: 0.5});
    } else {
      if ($(this).scrollTop() === $(document).height() - $(window).height()) gsap.to('#topBtn', {display: 'block', opacity: 1, bottom: 60, duration: 0.5})
      else gsap.to('#topBtn', {display: 'block', opacity: 1, bottom: 30, duration: 0.5})
    }
    // 헤더 상단 고정 & 풀기
    var $header = $("header");
    if(scrollY < $(window).height()){
      $header.removeClass("fixed");
      $header.find(">div").attr("class","shadow1");
      var $top = $(window).height()-$header.outerHeight();
      var $header_p = $top+($header.outerHeight()*($(this).scrollTop()/$(window).height()));
      $header.css({"top": $header_p});
    }
    else{
      $header.addClass("fixed");
      $header.find(">div").attr("class","shadow2");
    }
  });
});