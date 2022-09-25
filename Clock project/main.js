

const hour = document.querySelector("#idSecond");
const minute = document.querySelector("#idMinute");
const second = document.querySelector("#idHour");

function setDate() {
    const now = new Date();

    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDegree = (getSecond / 60) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const hourDegree = (getHour / 12) * 360;

    idSecond.style.transform = `rotate(${secondDegree}deg)`;
    idMinute.style.transform = `rotate(${minuteDegree}deg)`;
    idHour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);