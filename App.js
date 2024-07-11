const hourClock = document.getElementById('hoursContainer');
const minuteClock = document.getElementById('minutesContainer');
const secondClock = document.getElementById('secondsContainer');
const light=document.getElementById('light')
const music=document.getElementById('music')

// Functions


function time() {

    let timer = new Date();

    //Hours
    const hours = timer.getHours();
    hourClock.textContent = formatTime(hours)+':';
    



    //Minutes
    const minute = timer.getMinutes();
    minuteClock.textContent = formatTime(minute);
   



    //Seconds
    const second = timer.getSeconds();
    secondClock.textContent = formatTime(second);

}

function formatTime(timeClock) {
    if (timeClock < 10) {
        return `0${timeClock}`
    } else {
        return timeClock
    }
}

function lightUp(){
    const clock=document.getElementById('clockContainer');
    clock.classList.toggle('lightUp')
    clock.classList.toggle('normal')
}


light.addEventListener('click',lightUp)

function videoOn(){
    const video=document.getElementById('video');
    video.classList.toggle('visible')
    video.classList.toggle('nonVisible')
    
}


music.addEventListener('click',videoOn)


setInterval(time, 1000)
