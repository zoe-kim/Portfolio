$(document).ready(function () {
  // #intro
  // #intro 높이 지정
  $(window).trigger("scroll");
  $("#intro").css("height",$(window).height());
  // #scrollBtn 버튼 클릭하면 스크롤바를 #about 위치로 내림
  $('#intro .scrollBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: $('#about').offset().top}, 400, 'swing');
  });

  // #about
  // #age 만 나이 계산
  // 오늘 날짜 저장
  const now = new Date();
  const ty = now.getFullYear();   // 연도 반환
  const tm = now.getMonth() + 1;  // 월 반환 : 0 ~ 11월
  const td = now.getDate();       // 일 반환 : 1 ~ 31일
  // 생일 저장
  const birth = new Date(1997, 10, 27);  //  월 반환 : 0 ~ 11월 이므로, 탄생월은 -1 빼고 저장
  const by = birth.getFullYear();
  const bm = birth.getMonth() + 1;
  const bd = birth.getDate();
  // 나이 (올해의 연도 - 탄생 연도)
  let age = ty - by;
  // 아직 생일을 맞지 않았다면 1살 빼기 (탄생월 > 오늘인 경우 / 같은 달이라면, 탄생일 > 오늘인 경우)
  const m = tm - bm;
  if (m < 0 || (m === 0 && td < bd)) age--;
  // #age 찾아서 내부에 age 값 출력 (대상.innerHTML = 값;)
  const Age = document.getElementById('age');
  Age.innerHTML = age;
  // #today 찾아서 내부에 오늘 날짜 출력
  const toDay = document.getElementById('today');
  toDay.innerHTML = `- ${ty}. ${tm}. ${td} 기준`;
  // Skills 아코디언
  const $acdn = $('.accordion');
  // 1) 초기 설정 : 마지막 .acdnHeader(aria의 state)와 .acdnPanel(tabIndex 0) 활성화 => 클래스 .on 추가
  // 1-1) 아코디언 헤더
  $acdn.find('.tit:last-of-type .acdnHeader').addClass('on').attr({'aria-expanded': true, 'aria-disabled': true}).parents('.tit').siblings('.tit').children().attr({'aria-expanded': false});
  // 1-2) 아코디언 패널
  $acdn.find('.acdnPanel:last-of-type').addClass('on').attr({tabIndex: 0});
  // 2) 키보드 제어 - 상단방향키(38), 하단방향키(40), home(36), end(35), enter/spacebar(click 이벤트가 대신 함)
  $('.acdnHeader').on('keydown', function (e) {
    const key = e.keyCode;
    //console.log(key);
    switch (key) {
      case 38:  //상단방향키
        if ($(this).is('.first')) {
          $(this).closest('.accordion').find('.last').focus();
        } else {
          $(this).parent().prev().prev().children().focus();
        }
        break;
      case 40:  //하단방향키
        if ($(this).is('.last')) {
          $(this).closest('.accordion').find('.first').focus();
        } else {
          $(this).parent().next().next().children().focus();
        }
        break;
      case 36: //home
        e.preventDefault();
        $(this).closest('.accordion').find('.first').focus();
        break;
      case 35: //end
        e.preventDefault();
        $(this).closest('.accordion').find('.last').focus();
        break;
    }
  });
  // 3) 마우스 제어 - 클릭이벤트 => 열려지지 않은 버튼만 클릭할수 있음 (열려진 여부는 .acdnHeader가 .on을 갖는지로 확인)
  $('.acdnHeader').on('click', function () {
    if (!$(this).is('.on')) {
      // 3-1) 아코디언 헤더 : 선택되어진 버튼은 활성화 / 나머지 버튼은 비활성화
      $(this).addClass('on').attr({'aria-expanded': true, 'aria-disabled': true}).parents('.tit').siblings('.tit').children().removeClass('on').attr({'aria-expanded': false}).removeAttr('aria-disabled');
      // 3-2) 아코디언 패널
      $(this).parents('.tit').next().addClass('on').attr({tabIndex: 0}).siblings('.acdnPanel').removeClass('on').attr({tabIndex: -1});
    }
  });
  // 4) 아코디언 헤더가 focus, blur => .accordion.focus제어
  $('.acdnHeader').on({
    focus: function () {
      $(this).closest('.accordion').addClass('focus');
    },
    blur: function () {
      $(this).closest('.accordion').removeClass('focus');
    }
  });
  // 아코디언 헤더가 .on을 가질 때, 아이콘 폰트 클래스명 변경
  $('.acdnHeader').on('click', function () {
    if ($(this).is('.on')) $(this).find('.xi-angle-down-min').attr("class","xi-angle-up-min").parents('.tit').siblings('.tit').find('.xi-angle-up-min').attr("class","xi-angle-down-min");
  });

  // #experience

  // #awards
  // Swiper 슬라이더 제어
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',  // 수평 방향으로 슬라이드
    speed: 400,                   // 슬라이드 속도 (기본 300)
    slidesPerView : 3,         // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 20,     // 슬라이드 간 간격(px)
    slidesPerGroup : 3,      // 그룹으로 묶을 수, slidesPerView와 같은 값을 지정하는게 좋음   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: '이전 슬라이드 보기',
      nextSlideMessage: '다음 슬라이드 보기',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
      }
  });
  
  // #contact
  // .contact_btn에 마우스 진입 시 애니메이션
  $('.contact_btn').on({
    mouseenter: function () {
      $(this).parent().addClass('on');
    },
    mouseleave: function () {
      $(this).parent().removeClass('on');
    }
  });  
});