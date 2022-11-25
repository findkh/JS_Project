let items = [...document.querySelectorAll('.number')];
//console.log(items)

let updateCount = (el) => {
    let value = parseInt(el.dataset.value);
    let increment = Math.ceil(value/1000);
    let initValue = 0;

    let increaseCount = setInterval(() => {
        initValue += increment;

        if(initValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }

        el.textContent = `${initValue}+`;
    }, 1);
};

items.forEach((item) => {
    updateCount(item);
});