$(document).ready(function () {
  // Swiper
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',  // 수평 방향으로 슬라이드
    speed: 400,  // 슬라이드 속도 (기본 300)

    slidesPerView : 3,              // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 20,              // 슬라이드 간 간격(px)
    slidesPerGroup : 3,             // 그룹으로 묶을 수, slidesPerView와 같은 값을 지정하는게 좋음   

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
  
});