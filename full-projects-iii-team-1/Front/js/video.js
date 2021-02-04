/***************** LOCALSTORAGE *****************/

let localStorage = window.localStorage;
let user = {};

user = JSON.parse(localStorage.getItem('user'));


/****************** VIDEO ********************/

let vid = document.getElementById("myVideo");
let mainEnd = document.getElementById("main-end");
let backButton = document.getElementById('backBtn');

vid.onended = function() {
    mainEnd.classList.toggle('hide')
};

vid.volume = 0.2;

backButton.addEventListener('click', function(){

    window.location.href= 'https://beatles-experience.herokuapp.com/html/tijd.html';

})

if(user.audio === 'audioDisabled'){
    vid.volume = 0;
}


