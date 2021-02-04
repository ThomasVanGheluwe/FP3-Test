/* ANIMATION */

let main = document.getElementById("main");

main.classList.add("display-none");
setTimeout(function(){ 
    let loading = document.getElementById("container-loading");
    document.body.removeChild(loading);
    main.classList.remove("display-none");
},4000);
