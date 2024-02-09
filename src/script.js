// Script here
const boomCursor = document.getElementsByClassName('boom-cursor').item();
console.log(boomCursor);

document.body.addEventListener('mousedown', (event) => {
    boomCursor.style.display = "block";
    boomCursor.style.left = event.clientX;
    boomCursor.style.top = event.clientY;

    setTimeout(() => boomCursor.style.display = "none", 1300);
});