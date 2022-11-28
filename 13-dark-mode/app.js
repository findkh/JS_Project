let toggleBtn = document.querySelector('.btn');
let articleContainer = document.querySelector('.articles');

//테마 적용
toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
});

//console.log(articles)

//data.js 사용
let articleData = articles.map((article) => {
 //   console.log(article);
 const {title, date, length, snippet} = article;
 let formatDate = moment(date).format('MMMM Do, YYYY');
 return `<article class="post">
            <h2>${title}</h2>
            <div class="post-info">
                <span>${formatDate}</span>
                <span>${length} min read</span>
            </div>
            <p>
                ${snippet}
            </p>
        </article>`;
}).join('');

articleContainer.innerHTML = articleData;