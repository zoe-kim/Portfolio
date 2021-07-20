$(document).ready(function () {

  // #main
  // #scrollBtn 버튼 클릭하면 스크롤바를 937(#about 위치)로 내림
  $('#scrollBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: 937});
  });
  
  // #about
  // #age 만 나이 계산
  // 오늘 날짜 저장
  const now = new Date();
  const ty = now.getFullYear();   // 연도 반환
  const tm = now.getMonth() + 1;  // 월 반환 : 0 ~ 11월
  const td = now.getDate();       // 일 반환 : 1 ~ 31일

  // 생일 저장
  const birth = new Date(1997, 11, 27);
  const by = birth.getFullYear();
  const bm = birth.getMonth();
  const bd = birth.getDate();

  // 나이 (올해의 연도 - 탄생 연도)
  let age = ty - by;

  // 아직 생일을 맞지 않았다면 1살 빼기 (탄생월 > 오늘인 경우 / 같은 달이라면, 탄생일 > 오늘인 경우)
  const m = tm - bm;
  if (m < 0 || (m === 0 && td < bd)) age--;

  console.log(`1997년 11월 27일에 태어난 나의 만 나이는 오늘 기준(${ty}년 ${tm}월 ${td}일), ${age}세입니다.`);

  // #age 찾아서 내부에 age 값 출력 (대상.innerHTML = 값;)
  const Age = document.getElementById('age');
  Age.innerHTML = age;

});