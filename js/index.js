let qd = document.getElementById('qdd');
let startB = document.getElementById('btn1');
let stopB = document.getElementById('btn2');
let st_int;

const changeColor = () => {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    qd.style.backgroundColor=`rgba(${r}, ${g}, ${b})`;
    qd.style.transition='.3s';
}

const intervals = () => {
    st_int = setInterval(changeColor, 500);
}

const stop_intervals = () => {
    clearInterval(st_int);
}

/*
    I figured it will bug if I keep 2 events for the same purpose.
    If I try to click in start, then click inside the square and try to stop it,
    it won't let me.
*/
startB.addEventListener('click', intervals);
stopB.addEventListener('click', stop_intervals);