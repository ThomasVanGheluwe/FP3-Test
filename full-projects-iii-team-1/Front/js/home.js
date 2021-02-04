/***************** TEXT BLOCKS ******************/  

function displayAudio(){ 

    /* AUDIO TEXT BLOCK */
    let containerAudio = document.getElementById('audio-home-containers');
    containerAudio.classList.remove('display-none');
    containerAudio.classList.add('audio-home-containers');


    /* REMOVE INTRO */
    let containerIntro = document.getElementById('home-header-container');
    containerIntro.classList.add('display-none'); 

    /* DARKER IMG */
    let containerRoadBeatles = document.getElementById('container-imgRoadBeatles');
    containerRoadBeatles.classList.add('imgRoadBeatles-dark');

    /* AUDIO MUSIC, PLAY BACKGROUND MUSIC WHEN YOU CLICK ON BUTTON*/

    let audioContainer = document.getElementById('audio-container-home');

    audioContainer.innerHTML = `
    <audio id='audio-home' autoplay loop>
         <source src="../audio/the-beatles-here-comes-the-sun-2019-mix.mp3"></source>
    </audio>
    `
    let music = document.getElementById('audio-home');
    music.volume = 0.4;
  
}

let getStartedButton = document.getElementById('home-getstarted');
getStartedButton.addEventListener('click', displayAudio);



/****************** VOLUME SLIDER ********************/  

function setVolume(){
    let volumeSlider = document.getElementById('volumeSlider');
    let music = document.getElementById('audio-home');

    music.volume = volumeSlider.value / 100;
}

volumeSlider.addEventListener('mousemove', setVolume)



/****************** AUDIO BUTTONS *******************/  

let playButton = document.getElementById('play-button-home');

function audioButtons() {
    let music = document.getElementById('audio-home'); 
    let whatMusic = document.getElementById('what-music');
    let coverDMC  = document.getElementById('cover-DMC')

      if(music.paused){
        music.play()
        playButton.innerHTML = `<i class="fas fa-pause-circle"></i>`;
        playButton.classList.add('breathing-button-animation');
        whatMusic.innerHTML = '<span class="now-playing-green"> The Beatles - Drive my car</span>';
        coverDMC.classList.add('cover-moving');


    
      } else {
        music.pause()
        playButton.innerHTML = `<i class="fas fa-play-circle"></i>`;
        playButton.classList.remove('breathing-button-animation');
        whatMusic.innerText = 'The Beatles - Here comes the sun';
        coverDMC.classList.remove('cover-moving');
      }


}

playButton.addEventListener('click', audioButtons)


/****************** LOCALSTORAGE **********************/

let localStorage = window.localStorage;
let currentUser = {};
let audioYes = document.getElementById('audio-yes');
let audioNo = document.getElementById('audio-no');

function localhostAudioYes(){
  
  localStorage.setItem('user', JSON.stringify({
    audio: 'audioEnabled'
  }));
  window.location.href= 'https://beatles-experience.herokuapp.com/html/tijd.html';
}


audioYes.addEventListener('click', function(){

  localhostAudioYes();

});


audioNo.addEventListener('click', function(){

  localStorage.setItem('user', JSON.stringify({
    audio: 'audioDisabled'
  }));

  window.location.href= 'https://beatles-experience.herokuapp.com/html/tijd.html';
 
});