$(document).ready(function () {

  // #age 만 나이 계산
  // 오늘 날짜 저장
  const now = new Date();
  const ty = now.getFullYear();         // 연도 반환
  const tm = now.getMonth() + 1;  // 월 반환 : 0 ~ 11월
  const td = now.getDate();             // 일 반환 : 1 ~ 31일

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
  
  console.log(`1997년 11월 27일에 태어난 나의 만 나이는 오늘 기준(${ty}년 ${tm}월 ${td}일), ${age}세입니다.`);

  const $acdn = $('.accordion');
  // 1) 초기 설정 : 첫번째 .acdnHeader(aria의 state)과 .acdnPanel(tabIndex 0) 활성화 => 클래스 .on 추가
  // 1-1) 아코디언 헤더
  $acdn.find('.tit:first-of-type .acdnHeader').addClass('on').attr({'aria-expanded': true, 'aria-disabled': true}).parent().siblings('.tit').children().attr({'aria-expanded': false});
  // 1-2) 아코디언 패널
  $acdn.find('.acdnPanel:first-of-type').addClass('on').attr({tabIndex: 0});
});