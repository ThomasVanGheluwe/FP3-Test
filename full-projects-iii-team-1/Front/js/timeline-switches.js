/***************************  GET ELEMENTS *******************************/

let button1 = document.getElementById('button-1957');
let button2 = document.getElementById('button-1960');
let button3 = document.getElementById('button-1963');
let button4 = document.getElementById('button-1965');
let button5 = document.getElementById('button-1969');

let container1957 = document.getElementById('sub-container-content');
let container1960 = document.getElementById('sub-container-1960');
let container1963 = document.getElementById('sub-container-1963');
let container1965 = document.getElementById('sub-container-1965');
let container1969 = document.getElementById('sub-container-1969');



/*************************** FUNCTIONS *******************************/

/* Switch color button */
function toggleButtonColor(button){

    button1.classList.remove('whenclick-button');
    button2.classList.remove('whenclick-button');
    button3.classList.remove('whenclick-button');
    button4.classList.remove('whenclick-button');
    button5.classList.remove('whenclick-button');

    if(button.className !== 'whenclick-button'){

        button.classList.add('whenclick-button')
    }

}

/* Toggle visibility containers */
function toggleContainer(container, year){

    container1957.classList.add('display-none');
    container1960.classList.add('display-none');
    container1963.classList.add('display-none');
    container1965.classList.add('display-none');
    container1969.classList.add('display-none');

    container1957.classList.remove('sub-container-content');
    container1960.classList.remove('sub-container-1960');
    container1963.classList.remove('sub-container-1963');
    container1965.classList.remove('sub-container-1965');
    container1969.classList.remove('sub-container-1969');


    if(container.className === 'display-none'){

        container.classList.remove('display-none')
        container.classList.add(year);
    }

}


/***************************  ADD EVENTLISTENERS *******************************/

button1.addEventListener('click', function(){
    toggleButtonColor(button1);
    toggleContainer(container1957, 'sub-container-content');

})

button2.addEventListener('click', function(){
    toggleButtonColor(button2);
    toggleContainer(container1960, 'sub-container-1960');

})

button3.addEventListener('click', function(){
     toggleButtonColor(button3);
     toggleContainer(container1963, 'sub-container-1963');

})

button4.addEventListener('click', function(){
    toggleButtonColor(button4);
    toggleContainer(container1965, 'sub-container-1965');

})

button5.addEventListener('click', function(){
    toggleButtonColor(button5);
    toggleContainer(container1969, 'sub-container-1969');

})

/********************** END BUTTON ****************************/

let endButton = document.getElementById('endButton');


endButton.addEventListener('click', function(){
    window.location.href= 'https://beatles-experience.herokuapp.com/html/video.html';

})