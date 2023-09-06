let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function display(){
    let date = new Date();
    // Getting hours, minutes  and seconds

    let hrs = date.getHours();
    let mm = date.getMinutes();
    let se = date.getSeconds();

    let hRotation = 30*hrs + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*se;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    

}
setInterval(display,1000);