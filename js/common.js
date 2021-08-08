$(document).ready(function () {
  // 네비게이션 클릭시 이동
  $('header ul li a').on('click', function (e) {
    e.preventDefault(); // a 태그의 기본 기능 제한!!!
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 400, 'swing');
  });

  // .m_nav 열고 닫기
  $('.menu_open').on('click', function () {
    const $menuwrap = $('.menu_wrap');
    const $first =  $menuwrap.find('.first');
    const $last =  $menuwrap.find('.last');
    const $openBtn = $(this);

    // .menu_dim 생성 후 fadeTo로 서서히 나타내기
    $openBtn.after('<div class="menu_dim"></div>').next().stop().fadeTo('fast', 0.7);
    // .menu_wrap 우측에서 등장 애니메이션
    $menuwrap.css('visibility', 'visible').stop().animate({right: 0}, 300, function () {
      $first.focus(); // 상단 로고로 포커스 강제 이동
    });

    // .menu_wrap 내 키보드 제어 접근성
    // 1) $first에서 shift+tab 눌러 이전으로 나가는 경우, $last로 포커스 이동
    $first.on('keydown', function (e) {
      if (e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        $last.focus();
      }
    })
    // 2) $last에서 (shift 없이)tab만 눌러 다음으로 나가는 경우, $first로 포커스 이동
    $last.on('keydown', function (e) {
      if (!e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        $first.focus();
      }
    });

    // .menu_wrap 닫기 (dim, 닫기 버튼, a 눌렀을 때)
    $('.menu_dim, .menu_close, header ul li a').on('click', function () {
      $('.menu_dim').stop().fadeTo('slow', 0, function () {
        $(this).remove(); // .menu_dim을 fadeTo로 서서히 없앤 뒤, 완전히 제거
      });
      // .menu_wrap 우측으로 사라지는 애니메이션
      $menuwrap.stop().animate({right: '-100%'}, 300, function () {
        $(this).css('visibility', 'hidden');
        $openBtn.focus(); // 열기 버튼으로 포커스 강제 이동
      });
    });
  });

  // 사용자가 다크 테마 사용시
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // html에 .dark 추가
    document.documentElement.classList.add('dark');
    // #toggleIcon 아이콘 폰트 클래스명 변경
    document.getElementById('toggleIcon').setAttribute('class', 'xi-sun');
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
    // #topBtn
    if ($(this).scrollTop() < 100) {
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