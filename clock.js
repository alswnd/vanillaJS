/**
 * @author      minjung kim
 * @date        2020-06-24
 * @description make JS clock for learning about VanillaJS
 */

/**
 * @method querySelector : return first element in all selected elements by selector
 */
const clockContainer = document.querySelector(".clock-area"),
    clockTitle = document.querySelector(".clock");

/**
 * @function    getTime
 * @description get current time and set date in HTML.
 */
function getTime() {
    const date = new Date();

    setTime(date);
}

function setTime(date) {
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours > 9 ? `${hours}` : `0${hours}`}:${minutes > 9 ? `${minutes}` : `0${minutes}`}:${seconds > 9 ? `${seconds}` : `0${seconds}`}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();