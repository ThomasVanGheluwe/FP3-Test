/********************** LOCALHOST ***********************/

let localStorage = window.localStorage;
let user = {};

user = JSON.parse(localStorage.getItem('user'));


/********************** GET ELEMENTS *************************/

/*  music1 */
let playButtonMusic1 = document.getElementById('play-button-music1');
let audioMusic1 = document.getElementById('audio-music1');
let whatMusic1 = document.getElementById('what-music1');

/*  music2 */
let playButtonMusic2 = document.getElementById('play-button-music2');
let audioMusic2 = document.getElementById('audio-music2');
let whatMusic2 = document.getElementById('what-music2');

/*  music3 */
let playButtonMusic3 = document.getElementById('play-button-music3');
let audioMusic3 = document.getElementById('audio-music3');
let whatMusic3 = document.getElementById('what-music3');

/*  music4 */
let playButtonMusic4 = document.getElementById('play-button-music4');
let audioMusic4 = document.getElementById('audio-music4');
let whatMusic4 = document.getElementById('what-music4');

/*  music5 */
let playButtonMusic5 = document.getElementById('play-button-music5');
let audioMusic5 = document.getElementById('audio-music5');
let whatMusic5 = document.getElementById('what-music5');

/*  music6 */
let playButtonMusic6 = document.getElementById('play-button-music6');
let audioMusic6 = document.getElementById('audio-music6');
let whatMusic6 = document.getElementById('what-music6');

/*  music7 */
let playButtonMusic7 = document.getElementById('play-button-music7');
let audioMusic7 = document.getElementById('audio-music7');
let whatMusic7 = document.getElementById('what-music7');

/*  music8 */
let playButtonMusic8 = document.getElementById('play-button-music8');
let audioMusic8 = document.getElementById('audio-music8');
let whatMusic8 = document.getElementById('what-music8');

/*  music9 */
let playButtonMusic9 = document.getElementById('play-button-music9');
let audioMusic9 = document.getElementById('audio-music9');
let whatMusic9 = document.getElementById('what-music9');

/*  music10 */
let playButtonMusic10 = document.getElementById('play-button-music10');
let audioMusic10 = document.getElementById('audio-music10');
let whatMusic10 = document.getElementById('what-music10');

/*  music11 */
let playButtonMusic11 = document.getElementById('play-button-music11');
let audioMusic11 = document.getElementById('audio-music11');
let whatMusic11 = document.getElementById('what-music11');

/*  music12 */
let playButtonMusic12 = document.getElementById('play-button-music12');
let audioMusic12 = document.getElementById('audio-music12');
let whatMusic12 = document.getElementById('what-music12');

/*  music13 */
let playButtonMusic13 = document.getElementById('play-button-music13');
let audioMusic13 = document.getElementById('audio-music13');
let whatMusic13 = document.getElementById('what-music13');

/*  music14 */
let playButtonMusic14 = document.getElementById('play-button-music14');
let audioMusic14 = document.getElementById('audio-music14');
let whatMusic14 = document.getElementById('what-music14');

/*  music15 */
let playButtonMusic15 = document.getElementById('play-button-music15');
let audioMusic15 = document.getElementById('audio-music15');
let whatMusic15 = document.getElementById('what-music15');

/*  music16 */
let playButtonMusic16 = document.getElementById('play-button-music16');
let audioMusic16 = document.getElementById('audio-music16');
let whatMusic16 = document.getElementById('what-music16');

/*  music17 */
let playButtonMusic17 = document.getElementById('play-button-music17');
let audioMusic17 = document.getElementById('audio-music17');
let whatMusic17 = document.getElementById('what-music17');

/*  music18 */
let playButtonMusic18 = document.getElementById('play-button-music18');
let audioMusic18 = document.getElementById('audio-music18');
let whatMusic18 = document.getElementById('what-music18');



/*********************** MUSIC  ************************/

if (user.audio == "audioEnabled"){

    function toggleMusic(button, music, fragment){

        if(music.paused){
            button.innerHTML = `<i class="fas fa-pause-circle"></i>`
            music.play()
            fragment.classList.add('now-playing-green'); 
            button.classList.add('breathing-button-animation');
        } 
        
        else{
            button.innerHTML = `<i class="fas fa-play-circle">`
            music.pause()
            fragment.classList.remove('now-playing-green');  
            button.classList.remove('breathing-button-animation');
        }

        music.volume = 0.1;
    }


    /************************ ADD EVENTLISTENERS ****************************/

    playButtonMusic1.addEventListener('click', function(){
        toggleMusic(playButtonMusic1, audioMusic1, whatMusic1);
    });

    playButtonMusic2.addEventListener('click', function(){
        toggleMusic(playButtonMusic2, audioMusic2, whatMusic2);
    });

    playButtonMusic3.addEventListener('click', function(){
        toggleMusic(playButtonMusic3, audioMusic3, whatMusic3);
    });

    playButtonMusic4.addEventListener('click', function(){
        toggleMusic(playButtonMusic4, audioMusic4, whatMusic4);
    });


    playButtonMusic5.addEventListener('click', function(){
        toggleMusic(playButtonMusic5, audioMusic5, whatMusic5);
    });

    playButtonMusic6.addEventListener('click', function(){
        toggleMusic(playButtonMusic6, audioMusic6, whatMusic6);
    });


    playButtonMusic7.addEventListener('click', function(){
        toggleMusic(playButtonMusic7, audioMusic7, whatMusic7);
    });

    playButtonMusic8.addEventListener('click', function(){
        toggleMusic(playButtonMusic8, audioMusic8, whatMusic8);
    });

    playButtonMusic9.addEventListener('click', function(){
        toggleMusic(playButtonMusic9, audioMusic9, whatMusic9);
    });

    playButtonMusic10.addEventListener('click', function(){
        toggleMusic(playButtonMusic10, audioMusic10, whatMusic10);
    });

    playButtonMusic11.addEventListener('click', function(){
        toggleMusic(playButtonMusic11, audioMusic11, whatMusic11);
    });

    playButtonMusic12.addEventListener('click', function(){
        toggleMusic(playButtonMusic12, audioMusic12, whatMusic12);
    });

    playButtonMusic13.addEventListener('click', function(){
        toggleMusic(playButtonMusic13, audioMusic13, whatMusic13);
    });

    playButtonMusic14.addEventListener('click', function(){
        toggleMusic(playButtonMusic14, audioMusic14, whatMusic14);
    });

    playButtonMusic15.addEventListener('click', function(){
        toggleMusic(playButtonMusic15, audioMusic15, whatMusic15);
    });

    playButtonMusic16.addEventListener('click', function(){
        toggleMusic(playButtonMusic16, audioMusic16, whatMusic16);
    });

    playButtonMusic17.addEventListener('click', function(){
        toggleMusic(playButtonMusic17, audioMusic17, whatMusic17);
    });

    playButtonMusic18.addEventListener('click', function(){
        toggleMusic(playButtonMusic18, audioMusic18, whatMusic18);
    });

}

else{
};








