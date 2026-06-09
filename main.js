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
