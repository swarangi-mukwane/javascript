const days = document.getElementById('days');
const hours = document.getElementById('hours');     
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds'); 

const targetDate = new Date("May 21, 2025 00:00:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const Minutes = Math.floor((distance / (1000 * 60)) % 60);
    const Seconds = Math.floor((distance / 1000) % 60);

    if (distance < 0) {
        days.innerHTML = "00";
        hours.innerHTML = "00";     
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
    } else {
        days.innerHTML = String(Days).padStart(2, "0");
        hours.innerHTML = String(Hours).padStart(2, "0");
        minutes.innerHTML = String(Minutes).padStart(2, "0");
        seconds.innerHTML = String(Seconds).padStart(2, "0");
    }
}

setInterval(timer, 1000);