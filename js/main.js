$(document).ready(function () {

  // #main
  // #scrollBtn 버튼 클릭하면 스크롤바를 937(#about 위치)로 내림
  $('#scrollBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: 937});
  });
  
  // #about
  // #age -> 만 나이 계산법
  const now = new Date();
  console.log(now);

  const yy = now.getFullYear();   // 연도 반환
  const mm = now.getMonth() + 1;  // 월 반환 : 0 ~ 11월
  const dd = now.getDate();       // 일 반환 : 1 ~ 31일
  console.log(yy, mm, dd);

  // result 값
  let result = yy - '1997';
  console.log(result);

  // #age 찾아서 내부에 result 출력 (대상.innerHTML = 값;)
  const Age = document.getElementById('age');

  if(mm >= 11 && dd >= 27) Age.innerHTML = result;
  else Age.innerHTML = result - '1';  // 아직 생일을 맞지 않았다면 -1살

});