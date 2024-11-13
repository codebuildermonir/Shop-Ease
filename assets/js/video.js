const control = document.querySelector('#play');
const pause = document.querySelector('.pause');
const volume = document.querySelector('.volume');
const screen = document.querySelector('.screen');
const video = document.querySelector('.video');
const progress= document.querySelector('.sub-timeline');
control.addEventListener('click', function () {
      video.play();
      control.style.display="none"
})
video.addEventListener('click', function(){
      video.pause();
      control.style.display='flex'
})
pause.addEventListener('click',function(){
      video.pause()
      control.style.display='flex'
})
screen.addEventListener('click',function(){
      video.requestFullscreen()
})
volume.addEventListener('click',function(){
      video.volume="50%"
})

