document.addEventListener('DOMContentLoaded', ()=>{
    let container = document.getElementById('divContainer');
    let containerButtons = document.createElement('div');

    let btnSkip = document.createElement('button');
    let btnPlayPause = document.createElement('button');
    let btnBack = document.createElement('button');
    let btnStop = document.createElement('button');
 
    containerButtons.className = 'containerButtons';

    btnSkip.textContent = "+2 seconds";
    btnBack.textContent = "-2 seconds";
    btnStop.textContent = "Stop";
    btnPlayPause.textContent = "Play";

    btnSkip.classList.add('btn', 'skip');
    btnPlayPause.classList.add('btn', 'playPause');
    btnBack.classList.add('btn', 'back');
    btnStop.classList.add('btn', 'stop');


  

    containerButtons.append(btnSkip);
    containerButtons.append(btnPlayPause);
    containerButtons.append(btnBack);
    containerButtons.append(btnStop);
    container.append(containerButtons);

    btnSkip.addEventListener('click', skipTwoSeconds);
    btnPlayPause.addEventListener('click', playPauseVideo);
    btnBack.addEventListener('click', backTwoSeconds);
    btnStop.addEventListener('click', stopVideo);

    function skipTwoSeconds(){
        let videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.currentTime += 2;
    }

    function backTwoSeconds(){
        let videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.currentTime -= 2;
    }

    function playPauseVideo(){
        let videoPlayer = document.getElementById('videoPlayer');
        if(videoPlayer.paused){
            videoPlayer.play();
            btnPlayPause.textContent = "Pause";
        }else{
            videoPlayer.pause();
            btnPlayPause.textContent = "Play";
        }
    }

    function stopVideo(){
        let videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.currentTime = 0;
        videoPlayer.pause();
        btnPlayPause.textContent = "Play";
    }

    function setIcon(){
        let videoPlayer = document.getElementById('videoPlayer');
        if(videoPlayer.paused){
            btnPlayPause.innerHTML = '<i class="bi bi-play-fill"></i> Play';
        }
    }
    
});
    

    



