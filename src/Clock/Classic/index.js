
let clock = document.querySelector('.clock');
let handHours = clock.querySelector('.hours');
let handMinutes = clock.querySelector('.minutes');
let handSeconds = clock.querySelector('.seconds');

setInterval(startClock, 1000);

function startClock() {
    let now = new Date();
    let secondsDegree = (now.getSeconds()) / 60;
    let minutesDegree = (secondsDegree + now.getMinutes()) / 60;
    let hoursDegree = (minutesDegree + now.getHours()) / 12;

    setRotation(handSeconds, secondsDegree);
    setRotation(handMinutes, minutesDegree);
    setRotation(handHours, hoursDegree);

    currentHoursElement = clock.querySelector(`li:nth-child(${now.getHours() % 12 || 12})>span`);
    currentHoursElement.style = 'color:red';
}

function setRotation(element, degree) {
    element.style.setProperty("--degree", degree * 360);
}

window.onload = () => { startClock() };