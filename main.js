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
function askNovaSphere(){

let question =
document.getElementById("userQuestion")
.value.toLowerCase();

let answer = "";

if(question.includes("coding")){

answer =
"Start with HTML, CSS and JavaScript. Build small projects every day.";

}

else if(question.includes("ai")){

answer =
"AI is technology that learns from data and helps automate tasks.";

}

else if(question.includes("business")){

answer =
"Start by solving a problem people have and offer a valuable solution.";

}

else if(question.includes("money")){

answer =
"You can earn online through freelancing, affiliate marketing, content creation and digital products.";

}

else{

answer =
"Great question. NovaSphere is still learning. More answers coming soon.";

}

document.getElementById("answerBox")
.innerHTML = answer;

}
