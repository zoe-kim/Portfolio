$(document).ready(function () {
  // 네비게이션 클릭시 이동
  $('.pc_nav ul li a').on('click', function (e) {
    e.preventDefault(); // a 태그의 기본 기능 제한!!!
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 400, 'swing');
  });

  // 사용자가 다크 테마 사용시
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // html에 .dark 추가
    document.documentElement.classList.add('dark');
    // #toggleIcon 아이콘 폰트 클래스명 변경
    document.getElementById('toggleIcon').setAttribute('class', 'xi-sun')
  }
  
  // #toggleTheme 버튼 클릭시
  document.getElementById('toggleTheme').addEventListener('click', () => {
    // html에 .dark 추가
    document.documentElement.classList.toggle('dark');
    // #toggleIcon 아이콘 폰트 클래스명 변경
    if (document.getElementById('toggleIcon').getAttribute('class') == 'xi-moon') {
      document.getElementById('toggleIcon').setAttribute('class', 'xi-sun');
    } else {
      document.getElementById('toggleIcon').setAttribute('class', 'xi-moon');
    }
  });

  // #topBtn 버튼 클릭시 상단으로 이동
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