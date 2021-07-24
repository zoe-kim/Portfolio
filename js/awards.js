$(document).ready(function () {
  // Swiper
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',  // 수평 방향으로 슬라이드
    speed: 1200,  // 슬라이드 속도 (기본 300)
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