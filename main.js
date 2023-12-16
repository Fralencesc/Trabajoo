
let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let stop_btn = document.getElementById("stop-btn");

play_btn.addEventListener("click",()=>{
    cancion.play();
    Music.style.animation = 'rotation 4s infinite linear';
})
pause_btn.addEventListener("click", ()=>{
    cancion.pause();
    Music.style.animationPlayState = 'paused';
   
})
stop_btn.addEventListener("click", ()=>{
    cancion.pause();
    cancion.currentTime =0;
    Music.style.animation = '0';
})
