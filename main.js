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
function searchSite(){

let text =
document.getElementById("searchBox").value;

alert(
"You searched for: " + text
);

}
let temps = [
"18°C",
"22°C",
"15°C",
"30°C"
];

let status = [
"Sunny",
"Cloudy",
"Rainy",
"Windy"
];

function updateWeather(){

let t =
Math.floor(Math.random()*temps.length);

document.getElementById(
"weatherTemp"
).innerHTML = temps[t];

document.getElementById(
"weatherStatus"
).innerHTML = status[t];

}

setInterval(updateWeather,5000);
let aiNewsList = [
"New AI tools are transforming education.",
"AI is helping businesses automate tasks.",
"Developers are building smarter assistants."
];

let businessNewsList = [
"Online businesses continue to grow.",
"Remote work creates new opportunities.",
"Digital marketing remains in demand."
];

let worldNewsList = [
"Technology adoption is increasing worldwide.",
"Renewable energy projects are expanding.",
"Global innovation continues to accelerate."
];

function updateNews(){

document.getElementById(
"aiNews"
).innerHTML =
aiNewsList[
Math.floor(Math.random()*aiNewsList.length)
];

document.getElementById(
"businessNews"
).innerHTML =
businessNewsList[
Math.floor(Math.random()*businessNewsList.length)
];

document.getElementById(
"worldNews"
).innerHTML =
worldNewsList[
Math.floor(Math.random()*worldNewsList.length)
];

}

updateNews();

setInterval(updateNews,10000);
