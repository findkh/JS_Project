# 비디오 배경 만들기
로딩 이미지 setTimeout 사용하여 보이게 만듦
pause/play 토글버튼으로 만듦

✔️ document.querySelector()  
✔️ addEventListener()  
✔️ classList.contains()  
- 해당 요소의 클래스의 유무를 확인하여 true 또는 false로 구분한다.  

✔️ classList.add()
- 해당 요소의 클래스 속성값을 추가, 같은 클래스명 있는 경우 무시한다.  

✔️ classList.remove()  
- 클래스의 속성값을 체크하여 제거한다. 없는 경우 무시한다.  

✔️ play()  
✔️ pause()

video 태그 
- autoplay : 자동 재생 - true/false
- buffered : 버퍼링 범위 얻기
- controls 
    - true : 소리조절, 동영상탐색, 일시정지, 재시작할 수 있는 컨트롤러를 제공한다.
    - false : 컨트롤러를 숨긴다.
- crossorigin : CORS 요청 구성, CORS를 사용해서 관련 이미지를 패치해야하는 지를 결정한다.anonymous/use-credentials
- height : 비디오 높이(px)
- loop : 반복 재생 - true/false, true 일 경우 영상 마지막에 도달하면 처음으로 돌아간다.
- muted : 음소거 - true/false
- preload : 페이지 로드 시 비디오 파일 로드 여부, autoplay 속성이 preload 속성보다 우선 순위가 높다.
    - none : 페이지가 로드될 때 비디오 파일 로드를 할 필요가 없다(썸네일 안뜸)
    - metadata : 페이지가 로드될 때 비디오 파일의 메타데이터 정도만 같이 로드시킨다.
    - auto : 페이지가 로드될 때 전체 비디오 파일도 같이 로드 시킨다.
- poster : 썸네일 주소 설정, 재생버튼을 누르거나 탐색하기 전까지 비디오 대신 보여줄 이미지 주소, 설정하지 않으면 첫 번째 프레임을 포스터 프레임으로 출력한다.
- src : 영상 주소


