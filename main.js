console.log("NovaSphere Loaded");

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString();

    const clock = document.getElementById("clock");

    if(clock){
        clock.innerHTML = time;
    }
}

setInterval(updateClock,1000);
function animateValue(id,start,end,duration){

let current = start;

const increment = end / (duration / 20);

const obj = document.getElementById(id);

const timer = setInterval(function(){

current += increment;

if(current >= end){

current = end;

clearInterval(timer);

}

obj.innerHTML = Math.floor(current);

},20);

}

animateValue("aiCount",0,100,2000);

animateValue("courseCount",0,50,2000);

animateValue("memberCount",0,10000,2500);

animateValue("countryCount",0,190,2000);
