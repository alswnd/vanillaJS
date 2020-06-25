const body = document.querySelector("body");

const IMG_NUMBER = 3;
const IMG_NUMBER_START = 1;

function paintImage(imgNum) {
    const image = new Image();
    image.src = `./images/${imgNum}.jpg`;
    image.classList.add("bg-img");

    image.addEventListener("load", function() {
        body.appendChild(image);
    });
}

function genRandom() {
    return number = Math.floor(Math.random() * IMG_NUMBER + IMG_NUMBER_START);
}

function init() {
    paintImage(genRandom());
}

init();