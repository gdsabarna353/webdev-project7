let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
const audioElement = new Audio('clock.mp3');


setInterval(()=>{
    
    window.addEventListener('mouseup', ()=>{
        audioElement.play();
    })
    let day = new Date();
    let hour = day.getHours() * 30;
    let minute = day.getMinutes() * 6;
    let second = day.getSeconds() * 6;
    
    hr.style.transform = `rotate(${hour + minute/12}deg)`;
    mn.style.transform = `rotate(${minute}deg)`;
    sc.style.transform = `rotate(${second}deg)`;

    // digital clock designing
    
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    //converting 24 hour clock to 12 hour clock
    var am = "AM";
    if(h>=12){
        h = h-12;
        am = "PM";
    }
    
    //add zero before single digit number
    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
})

