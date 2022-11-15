# 혼자서 만들어보는 Counter
버튼 클릭으로 숫자 증감 표현  
양수 : 초록색  
음수 : 빨간색  
0 : 남색


✔️ document.querySelectorAll()  
✔️ forEach()  
✔️ addEventListener()  
✔️ currentTarget  
 - event.target은 이벤트가 실제로 발생한 요소를 가리킨다.
 - event.currentTarget은 이벤트 버블링으로 인해 이벤트가 발생한 대상 요소나 부모 요소를 가리킨다.   

✔️ classList  
- classList를 이용하여 해당 요소를 출력하면 DOM TokenList를 출력하고, 배열 형태로 클래스 이름들을 보여준다.
- contains() 메서드를 사용하여 해당 클래스 이름을 가진 요소를 찾아서 if문 걸 때 사용함.

✔️ textContent    
 - innerText과 비슷한 역할을 한다.
 - innerText는 불필요한 공백을 제거하고 텍스트를 반환하지만, textContent는 모든 텍스트를 그대로 가져오는 차이가 있다.(IE의 경우 차이가 나타나지만 크롬에서는 동일한 결과가 나온다고함.)
    
