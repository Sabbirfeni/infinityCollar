let videoContainer = document.getElementById('video__model');
let videoShowBtn = document.getElementById('showVideo');
let videoRemoveBtn = document.getElementById('remove__video');
let video = document.getElementById('video');

videoShowBtn.addEventListener('click', () => {
    video.currentTime = 0;
    videoContainer.classList.add('active');
    video.play();
    video.volume = 0.2;
})


videoRemoveBtn.addEventListener('click', () => {
    videoContainer.classList.remove('active');
    video.pause();
})