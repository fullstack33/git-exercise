let time = document.getElementById("time");
let date = document.getElementById("date");
let timer = document.getElementById("timer");
let btnStart = document.getElementById('start');
let btnStop = document.getElementById("stop");
let btnResume = document.getElementById('resume');
let btnReset = document.getElementById('reset');
let milliSecond = '00';
let second = '00';
let minute = '00';
let hours = '00';
let manageInterval;
btnStart.disabled = false
btnStop.disabled = true
btnResume.disabled = true
btnReset.disabled = true

let showTime = () => {
    time.textContent = new Date().toLocaleTimeString()

}

let showDate = () => {
    let fullDateArray = new Date().toDateString().split(" ");
    let day = fullDateArray[2];
    let month = fullDateArray[1];
    let year = fullDateArray[3];
    date.textContent = `${day} ${month} ${year}`
}

function showTimer() {
    timer.textContent = `${hours} : ${minute} : ${second} : ${milliSecond} `
}

let startTimer = () => {
    manageInterval = setInterval(changeMilisecond, 10)
}

function changeMilisecond() {
    milliSecond = +milliSecond + 1;
    if (String(milliSecond).length < 2) {
        milliSecond = `0${milliSecond}`
    }
    if (milliSecond > 99) {
        milliSecond = 0;
        changesecond()
    }
    showTimer()
}

function changesecond() {
    second = +second + 1;
    if (String(second).length < 2) {
        second = `0${second}`
    }
    if (second > 59) {
        second = 0;
        changeMinute()
    }
}

function changeMinute() {
    minute = +minute + 1;
    if (String(minute).length < 2) {
        minute = `0${minute}`
    }
    if (minute > 59) {
        minute = 0;
        changeHour()
    }
}

function changeHour() {
    if (String(hours) < 2) {
        hours = `0${hours}`
    }
    hours = +hours + 1;
}



// ========== Start ===================
btnStart.addEventListener('click', () => {
    startTimer();
    btnStart.disabled = true
    btnStop.disabled = false
    btnResume.disabled = true
    btnReset.disabled = false
})

// ============= Stop ==================
btnStop.addEventListener('click', () => {
    clearInterval(manageInterval)
    btnResume.disabled = false
})

// ============= Resume =================
btnResume.addEventListener('click', () => {
    startTimer();
    btnResume.disabled = true
})

// ============= Reset ==================
btnReset.addEventListener("click", () => {
    clearInterval(manageInterval)
    milliSecond = '00';
    second = '00';
    minute = '00';
    hours = '00';
    showTimer()
    btnStart.disabled = false
    btnStop.disabled = true
    btnResume.disabled = true
    btnReset.disabled = true
})

// ==== Show Time  =============
showTime();
setInterval(() => {
    showTime()
}, 1000)

// ============= Show Date =============
showDate()

// ========== Show Timer =================
showTimer()