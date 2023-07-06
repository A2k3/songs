var audio1 = new Audio("assets/songs/mukile mukile.mp3");
var audio2 = new Audio("assets/songs/Jupiter mazha.mp3");
var audio3 = new Audio("assets/songs/hara hara shankara.mp3");
var audio4 = new Audio("assets/songs/Rathri mulla.mp3");
var audio5 = new Audio("assets/songs/Oru pushpam.mp3");
var audio6 = new Audio("assets/songs/Pinneyum pinneyum.mp3");


var currentlyPlaying = null;

 document.getElementById('btn1').addEventListener('click', function(){
    if (currentlyPlaying){
        currentlyPlaying.pause();
    }  
    audio1.play();
    currentlyPlaying = audio1;
});

document.getElementById('btn2').addEventListener('click', function(){
    if (currentlyPlaying){
        currentlyPlaying.pause();
    }  
    audio2.play();
    currentlyPlaying = audio2;
});

document.getElementById('btn3').addEventListener('click', function(){
    if (currentlyPlaying){
        currentlyPlaying.pause();
    }  
    audio3.play();
    currentlyPlaying = audio3;
});

document.getElementById('btn4').addEventListener('click', function(){
    if (currentlyPlaying){
        currentlyPlaying.pause();
    }  
    audio4.play();
    currentlyPlaying = audio4;
});

document.getElementById('btn5').addEventListener('click', function(){
    if (currentlyPlaying){
        currentlyPlaying.pause();
    }  
    audio5.play();
    currentlyPlaying = audio5;
});

document.getElementById('btn6').addEventListener('click', function(){
    if (currentlyPlaying){
        currentlyPlaying.pause();
    }  
    audio6.play();
    currentlyPlaying = audio6;
});