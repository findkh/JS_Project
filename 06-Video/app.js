let preLoader = document.querySelector('.preloader');
let pauseBtn = document.querySelector('.switch-btn');
let video = document.querySelector(".video-container");

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => preLoader.classList.add('hide-preloader'), 1000);
});

pauseBtn.addEventListener('click', function() {
    if(!pauseBtn.classList.contains('slide')) {
        pauseBtn.classList.add('slide');
        video.pause();
    } else {
        pauseBtn.classList.remove('slide');
        video.play();
    }
});