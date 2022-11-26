// get hand's
const hours = document.querySelector(".clock .hours");
const minutes = document.querySelector(".clock .minutes");
const seconds = document.querySelector(".clock .seconds");

Number.prototype.fixTime = function () {
    // In this method, if your number is less than 10, zero will be added to it.
    let number = parseInt(this);
    return (number > 9) ? number+"" : `0${number}`;
}

function updateTime() {
    const now = new Date();
    hours.textContent = now.getHours().fixTime();
    minutes.textContent = now.getMinutes().fixTime();
    seconds.textContent = now.getSeconds().fixTime();
}

const id = setInterval(updateTime, 100);


