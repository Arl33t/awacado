var el = document.querySelectorAll(".myBtn");
let state = 0;
function expandModul() {
    if (state === 0) {
        /*
        document.querySelector(".mod1").style.height ="800px";
        document.querySelector(".mod1").style.margin ="0px 0px 0px 100px";
        */
        console.log("test");
        document.querySelector("#modul1").classList.add("text-primary");
        state++;
    }else {
        /*
        document.querySelector(".mod1").style.height ="300px";
        document.querySelector(".mod1").style.margin ="5px";
        */
        document.querySelector("#modul1").classList.remove("text-primary");
        console.log("test2");
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