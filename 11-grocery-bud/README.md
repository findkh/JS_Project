# 식료품 리스트 만들기
CRUD List
- 페이지가 로드되면 로컬 스토리지에 저장된 리스트 불러온다.
- submit 버튼을 누르면 로컬 스토리지에 저장된다.
- 리스트들에는 수정과 삭제 아이콘이 있고 각 아이콘을 클릭하면 각 기능을 수행한다.
- 각 기능들이 수행되면 alert 메세지가 출력된다.(setTimeout 사용)

✔️ DOMContentLoaded  
✔️ new Date()  
✔️ createAttribute()   
- Attribute 생성

✔️ setAttribute()  
- Attribute 추가

✔️ appendChild()  
- 자식 노드 붙임

✔️ filter()  
✔️ map()  

✔️ 요소(Element)와 속성(Attribute)


✔️ 로컬스토리지 vs 세션스토리지
- 웹 스토리지에는 로컬 스토리지와 세션 스토리지가 있다.
- 세션 스토리지는 웹페이지의 세션이 끝날 때 저장된 데이터가 지워진다. 브라우저에서 각 탭이나 창이 서로 격리되어 저장되며, 탭이나 창이 닫힐 때 저장해 둔 데이터도 소멸한다.
- 로컬 스토리지는 웹페이지의 세션이 끝나더라도 데이터가 지워지지 않는다. 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있는다.

``` javaScript
//키에 데이터 쓰기
localStorage.setItem('key', value);

//키로 데이터 읽어 오기
localStorage.getItem('key');

//키의 데이터 삭제
localStorage.removeItem('key');

//모든 키의 데이터 삭제
localStorage.clear();

//저장된 키/값 쌍의 개수
localStorage.length;
```
