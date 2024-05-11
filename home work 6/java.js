
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');



const formatNum = num => num < 10 ? `0${num}` : num;

const timer = setInterval(() => {
    let date = new Date();
    let me = new Date(2024, 4, 9);
    let difference = Date.parse(me) - Date.parse(date);


    let daysValue = Math.floor(difference / 1000 / 60 / 60 / 24);
    let hoursValue = Math.floor((difference / 1000 / 60 / 60) % 24);
    let minutesValue = Math.floor((difference / 1000 / 60) % 60);
    let secondsValue = Math.floor((difference / 1000) % 60);

    days.textContent = formatNum(daysValue);
    minutes.textContent = formatNum(minutesValue);
    hours.textContent = formatNum(hoursValue);
    seconds.textContent = formatNum(secondsValue);

    if (difference <= 0) {
        clearInterval(timer);
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        const birthday = document.createElement('p');
        birthday.textContent = 'Happy birthday to me!';
        birthday.style.color = 'blue';
        birthday.style.fontSize = '50px';
        birthday.style.top = '550px';
        birthday.style.position = 'absolute';
        birthday.style.left = '50%';
        birthday.style.transform = 'translateX(-50%)';
        document.body.appendChild(birthday);

        return;
    }



}, 1000)



