setInterval(() => {
    let clock = document.getElementById('clock');
    let dayofweek = document.getElementById('dayofweek');
    let month = document.getElementById('month');
    let day = document.getElementById('day');
    let year = document.getElementById('year');
    let amorpm = document.getElementById('amorpm');

    // Get Time
    let date = new Date();
    let hours = date.getHours();
    if (hours > 12){
        hours = `${hours - 12}`;
    }
    let minutes = date.getMinutes();
    if (minutes <= 9){
        minutes = `0${minutes}`;
    }

    let seconds = date.getSeconds();
    if (seconds <= 9){
        seconds = `0${seconds}`;
    }

    // Get Date
    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();
    let cDayofweek = date.getDay();
    let cDay = date.getDate()

    let daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    // Display the clock 
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

    if (hours < 12) {
        amorpm.innerHTML = 'AM';
    } else {
        amorpm.innerHTML = 'PM';
    }

    // Display the Date
    dayofweek.innerHTML = `${daysName[cDayofweek]} |`;
    month.innerHTML = `${cMonth}-`;
    day.innerHTML = `${cDay}-`;
    year.innerHTML = `${cYear}`;


}, 1000);