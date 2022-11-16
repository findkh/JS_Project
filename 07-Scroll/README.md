# 페이지 스크롤
한 페이지 내에서 링크 이동  
반응형 내비게이션 바 만들기(햄버거 메뉴)

## 메서드
✔️ Element.getBoundingClientRect()
 - element 크기(width, height)와 viewport를 기준으로 한 위치(left, top, right, bottm, x, y) 8개의 객체를 리턴한다.
 - viewport를 기준으로 하는 하는 상대 값이기때문에 scroll로 인해 위치가 변경될 때마다 값이 변경된다.

✔️ Window.pageYOffset
 - 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환한다.

✔️ HTMLElement.offsetTop
 - 부모 요소(position이 relative)에게서 상대적인 top 좌표를 반환한다. 만약 부모 요소 중에 position이 relative가 없다면 최상위 dom을 기준으로한 좌표를 반환한다.(절대좌표)

✔️ preventDefault
 - 해당 이벤트에 대한 브라우저의 기본 동작을 실행하지 않도록 지정
