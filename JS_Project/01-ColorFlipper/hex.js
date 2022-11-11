const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.querySelector('button');
let bgColorSpan = document.getElementById('color');


//색상 #6자리
//헥사는 16진수
//숫자 0~9, 알파벳 A~F 사용
function getNewColor() {
    let newHexColor = '#';
    for(let i = 0; i < 6; i++) {
        let idx = Math.floor(Math.random() * hex.length);
        newHexColor += hex[idx];
    }
    return newHexColor;
}

btn.addEventListener('click', function() {
    let color = getNewColor();
    bgColorSpan.innerHTML=color;    
    document.body.style.backgroundColor = color;
}, false);



