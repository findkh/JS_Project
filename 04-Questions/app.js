let buttons = document.querySelectorAll('.question-btn');

buttons.forEach(function(item){
  item.addEventListener('click', function() {
    //부모 찾기(article까지)
    let article = item.parentElement.parentElement;
    article.classList.toggle('show-text');
  })
})