# Zoe's Portfolio

코딩하는 디자이너 **Zoe**의 반응형 웹 포트폴리오입니다. UX/UI와 웹 접근성을 기반으로 직접 기획·디자인·퍼블리싱·개발했습니다.

🔗 **Live**: https://zoe-kim.github.io/Portfolio/

## ✨ 주요 특징

- **반응형 레이아웃** — PC / 태블릿 / 모바일 대응 (1440 · 1320 · 767px 브레이크포인트)
- **다크 모드** — OS 설정 자동 감지 + 사용자 선택을 `localStorage`에 저장
- **웹 접근성** — 스킵 내비게이션, 스크린리더 대체 텍스트, 키보드로 조작 가능한 아코디언(방향키/Home/End)·모바일 메뉴 포커스 트랩, `aria-*` 속성
- **모션 인터랙션** — GSAP 스크롤 애니메이션, Swiper 슬라이더, 인트로 텍스트 롤링 (`prefers-reduced-motion` 존중)
- **성능 배려** — 영상은 뷰포트 진입 시에만 재생(IntersectionObserver), 이미지 지연 로딩, 스크롤 핸들러 `requestAnimationFrame` 스로틀

## 🛠 기술 스택

- **마크업/스타일**: HTML5, SCSS (Sass)
- **스크립트**: JavaScript (ES6+), jQuery
- **라이브러리**: GSAP, Swiper, xeicon
- **배포**: GitHub Pages

## 📁 폴더 구조

```
Portfolio/
├─ index.html         # 단일 페이지 (intro · about · experience · awards · contact)
├─ css/               # SCSS 소스 및 컴파일된 CSS
│  ├─ common.scss     # 리셋 · 공통 · 헤더/푸터 · 다크모드 · 반응형
│  ├─ main.scss       # 섹션별 스타일
│  └─ _var · _mixin · _function   # 변수 · 믹스인 · vw 계산 함수
├─ js/
│  ├─ common.js       # 내비게이션 · 다크모드 토글 · 스크롤 · top 버튼
│  └─ main.js         # 나이 계산 · 아코디언 · Swiper · 영상 재생
├─ images/  ·  video/  ·  pdf/      # 정적 에셋
```

## 🚀 로컬 실행

별도 빌드 없이 정적 파일을 서버로 띄우면 됩니다.

```bash
# 예시: Python 내장 서버
python3 -m http.server 8000
# → http://localhost:8000
```

SCSS를 수정한 경우 컴파일이 필요합니다.

```bash
sass --watch css/common.scss css/common.css
sass --watch css/main.scss css/main.css
```

## 📬 Contact

- Email: enzoit.dev@gmail.com
- GitHub: https://github.com/Zoe-Kim

---

© 2021 Zoe. All Rights Reserved.
