let spanValue = document.getElementById('value');
let buttons = document.querySelectorAll('.btn');

let value = 0;
changeColor(value);

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        clickBtn = e.currentTarget.classList;
        if (clickBtn.contains('decrease')) {
            value -= 1;
            changeColor(value);
        } else if (clickBtn.contains('increase')) {
            value += 1;
            changeColor(value);
        } else {
            value = 0;
            changeColor(value);
        }        
    })
})

function changeColor(value) {
    if(value > 0) {
        spanValue.style.color = 'green'
        spanValue.innerText = value
    } else if(value < 0) {
        spanValue.style.color = 'red'
        spanValue.innerText = value
    } else {
        spanValue.style.color = '#222';
        spanValue.innerText = value
    }
}