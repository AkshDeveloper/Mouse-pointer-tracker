// mouse pointer tracker

const mouseTracker = document.querySelector(".mouse-tracker");
const result = document.querySelector(".result");

window.addEventListener("mousemove", (e) => {
    let left = 0;
    let top = 0;

    left = e.pageX;
    top = e.pageY;  

    result.innerText = `leftX: ${left} TopY: ${top}`;
    
    mouseTracker.style.left = left + "px";
    mouseTracker.style.top = top + "px";
});