let article = document.querySelector('.about');
let buttons = document.querySelectorAll('.tab-btn');
let contents = document.querySelectorAll('.content');

article.addEventListener('click', function(e) {
    let id = e.target.dataset.id;

    if(id) {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        contents.forEach(function(content) {
            content.classList.remove('active');
        });

        let element = document.getElementById(id);
        element.classList.add('active');
    }
});