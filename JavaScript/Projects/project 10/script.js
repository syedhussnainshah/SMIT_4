const preloader = document.querySelector(".preloader");
const video = document.querySelector('.video-section');
const videoBtn = document.querySelector('.video-btns');
// Loader
window.onload = function () {
    preloader.classList.add("hide-preloader")
}
// BG Video
videoBtn.onclick = function () {
    if (videoBtn.classList.contains('stop')) {
        videoBtn.classList.remove('stop');
        video.play();
    } else {
        videoBtn.classList.add("stop");
        video.pause();
    }
}