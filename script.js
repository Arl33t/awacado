var el = document.querySelectorAll(".myBtn");
let state = 0;
for (var i = 0; i < el.length; i++) {
    el[i].addEventListener('click', function() {
        if (state === 0) {
        document.querySelector(".modul").style.height ="800px";
        document.querySelector(".modul").style.margin ="0px 0px 0px 100px";
        state++;
    }else {
        document.querySelector(".modul").style.height ="300px";
        document.querySelector(".modul").style.margin ="5px";
        state--;
    }
    });
}

/*function myFunction() {
    if (state === 0) {
        document.querySelector(".modul").style.height ="800px";
        document.querySelector(".modul").style.margin ="0px 0px 0px 100px";
        state++;
    }else {
        document.querySelector(".modul").style.height ="300px";
        document.querySelector(".modul").style.margin ="5px";
        state--;
    }
}

window.onload=function(){
    document.querySelector(".myBtn").addEventListener("click", myFunction);
}
let state = 0;
function myFunction() {
    if (state === 0) {
        document.querySelector(".modul").style.height ="800px";
        document.querySelector(".modul").style.margin ="0px 0px 0px 100px";
        state++;
    }else {
        document.querySelector(".modul").style.height ="300px";
        document.querySelector(".modul").style.margin ="5px";
        state--;
    }
}
*/