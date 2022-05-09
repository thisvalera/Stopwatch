const hours = document.querySelector('.timer__time--hour');
const minutes = document.querySelector('.timer__time--minute');
const seconds = document.querySelector('.timer__time--second');
const miliseconds = document.querySelector('.timer__time--milisecond');

//buttons
const startBtn = document.querySelector('.buttons__item--start');
const pausetBtn = document.querySelector('.buttons__item--pause');
const stoptBtn = document.querySelector('.buttons__item--stop');
const newBtn = document.querySelector('.buttons__item--new');

//functions listeners
startBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

pausetBtn.addEventListener('click', () => clearInterval(interval));

stoptBtn.addEventListener('click', () => {
    clearInterval(interval);
    clearbords();
});

newBtn.addEventListener('click', () => {
    clearInterval(interval);
    counter++
    const results = document.querySelector('.results__inner');
    const resultsItem = document.createElement('div');
    resultsItem.innerText = `Result ${counter}: ${hours.textContent}:${minutes.textContent}:${seconds.textContent}:${miliseconds.textContent}`
    results.append(resultsItem);
    clearbords();
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});



// units
let minute = 0,
    second = 0,
    milisecond = 0,
    hour = 0,
    interval,
    counter = 0;



const startTimer = () => {

    //Milisecond
    milisecond++
    milisecond < 9 ? miliseconds.textContent = '0' + milisecond : miliseconds.textContent = milisecond;
    if (milisecond > 99) {
        second++
        seconds.textContent = '0' + second;
        milisecond = 0;
        miliseconds.textContent = '0' + milisecond;
    }

    //Second
    second < 9 ? seconds.textContent = '0' + second : seconds.textContent = second;
    if (second > 59) {
        minute++;
        minutes.textContent = '0' + minute;
        second = 0;
        seconds.textContent = '0' + second
    }

    //minutes
    minute < 9 ? minutes.textContent = '0' + minute : minutes.textContent = minute;
    if (minute > 59) {
        hour++;
        hours.textContent = '0' + minute;
        minute = 0;
        minutes.textContent = '0' + minute
    }

    //hour
    hour < 9 ? hours.textContent = '0' + hour : hours.textContent = hour;
    if (hour == 24) return

}

const clearbords = () => {
    minute = 0;
    second = 0;
    milisecond = 0;
    hour = 0;
    miliseconds.textContent = '00';
    seconds.textContent = '00';
    minutes.textContent = '00';
    hours.textContent = '00';
}

