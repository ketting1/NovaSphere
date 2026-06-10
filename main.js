console.log("NovaSphere Loaded");

/* Dark Mode */

function toggleDarkMode() {
document.body.classList.toggle("dark");
}

/* Clock */

function updateClock() {
const now = new Date();
const time = now.toLocaleTimeString();

const clock = document.getElementById("clock");

if (clock) {
    clock.innerHTML = time;
}

}

updateClock();
setInterval(updateClock, 1000);

/* Counters */

function animateValue(id, start, end, duration) {

let current = start;

let increment = (end - start) / (duration / 20);

let timer = setInterval(() => {

    current += increment;

    if (current >= end) {
        current = end;
        clearInterval(timer);
    }

    const element = document.getElementById(id);

    if (element) {
        element.innerHTML = Math.floor(current);
    }

}, 20);

}

animateValue("aiCount", 0, 150, 2000);
animateValue("courseCount", 0, 80, 2000);
animateValue("memberCount", 0, 5000, 2500);
animateValue("countryCount", 0, 195, 2000);

/* Assistant */

function askNovaSphere() {

let question = document
    .getElementById("userQuestion")
    .value
    .toLowerCase();

let answer = "";

if (question.includes("coding")) {

    answer =
    "💻 Start with HTML, CSS and JavaScript. Build small projects every day.";

}

else if (question.includes("ai")) {

    answer =
    "🤖 AI is technology that learns from data and helps automate tasks.";

}

else if (question.includes("business")) {

    answer =
    "💼 Start by solving a problem and creating value for people.";

}

else if (question.includes("money")) {

    answer =
    "💰 You can earn online through freelancing, affiliate marketing, content creation and digital products.";

}

else if (question.includes("learn")) {

    answer =
    "📚 Learning consistently every day is one of the best investments you can make.";

}

else if (question.includes("world")) {

    answer =
    "🌎 NovaSphere connects people, knowledge and opportunities across the world.";

}

else {

    answer =
    "✨ NovaSphere is still learning. Try asking about AI, coding, business, money or learning.";

}

document.getElementById("answerBox").innerHTML = answer;

}

/* Search */

function searchSite() {

let text =
document.getElementById("searchBox").value;

alert("You searched for: " + text);

}

/* Weather */

const temps = [
"18°C",
"22°C",
"15°C",
"30°C"
];

const status = [
"Sunny",
"Cloudy",
"Rainy",
"Windy"
];

function updateWeather() {

let random =
Math.floor(Math.random() * temps.length);

const temp =
document.getElementById("weatherTemp");

const weather =
document.getElementById("weatherStatus");

if (temp) {
    temp.innerHTML = temps[random];
}

if (weather) {
    weather.innerHTML = status[random];
}

}

updateWeather();
setInterval(updateWeather, 5000);

/* News */

const aiNewsList = [
"New AI tools are transforming education.",
"AI is helping businesses automate tasks.",
"Developers are building smarter assistants."
];

const businessNewsList = [
"Online businesses continue to grow.",
"Remote work creates new opportunities.",
"Digital marketing remains in demand."
];

const worldNewsList = [
"Technology adoption is increasing worldwide.",
"Renewable energy projects are expanding.",
"Global innovation continues to accelerate."
];

function updateNews() {

const aiNews =
document.getElementById("aiNews");

const businessNews =
document.getElementById("businessNews");

const worldNews =
document.getElementById("worldNews");

if (aiNews) {
    aiNews.innerHTML =
    aiNewsList[Math.floor(Math.random() * aiNewsList.length)];
}

if (businessNews) {
    businessNews.innerHTML =
    businessNewsList[Math.floor(Math.random() * businessNewsList.length)];
}

if (worldNews) {
    worldNews.innerHTML =
    worldNewsList[Math.floor(Math.random() * worldNewsList.length)];
}

}

updateNews();
setInterval(updateNews, 10000);
function searchSite() {

let text =
document.getElementById("searchBox").value;

if(text === "") {

alert("Type something first");

return;

}

alert("You searched for: " + text);

}
