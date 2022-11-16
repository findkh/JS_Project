// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// footer 날짜 넣기
let date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************

//햄버거 버튼
let navToggle = document.querySelector('.nav-toggle');
//링크 ul container
let ulContainer = document.querySelector(".links-container");
//ul
let links = document.querySelector(".links");

//햄버거 버튼 클릭 이벤트
navToggle.addEventListener('click', function() {
    let linksHeight = links.getBoundingClientRect().height;
    let containerHeight = ulContainer.getBoundingClientRect().height;

    //console.log('linksHeight' + linksHeight);
    //console.log('containerHeight' + containerHeight);

    if(containerHeight == 0) {
        ulContainer.style.height = `${linksHeight}px`;
    } else {
        ulContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
let navbar = document.getElementById("nav");
let topLink = document.querySelector(".top-link");

window.addEventListener('scroll', function() {
    let scrollHeight = window.pageYOffset;
    let navHeight = navbar.getBoundingClientRect().height;

    //console.log('scrollHeight' + scrollHeight);
    //console.log('navHeight' + navHeight);

    //스크롤 내릴 때 nav가 윗쪽에 붙어서 따라 다니게 함
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    //맨 위로 올라가는 버튼 생기게함
    if(scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        let id = e.currentTarget.getAttribute('href').replace(/#/g,'');
        let element = document.getElementById(id);
        
        let navHeight = navbar.getBoundingClientRect().height;
        let containerHeight = ulContainer.getBoundingClientRect().height;
        let fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position = position - navHeight;
        }

        if(navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        });

        ulContainer.style.height = 0;
    })
})
