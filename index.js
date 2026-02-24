let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let displayTime = document.getElementById("timer-display");
let amountTime = document.getElementById("time-input");
let homeCount = 0;
let guestCount = 0;
let time = 0;
let timerId = null;

function incrementHome1() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function incrementHome2() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function incrementHome3() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function incrementGuest1() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function incrementGuest2() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function incrementGuest3() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function resetScores() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
}

function startTimer() {
    if (timerId) return; // prevent multiple timers

    time = Number(amountTime.value);
    displayTime.innerText = time + ".00 Seconds Remaining";

    if (time < 10) {
    displayTime.classList.add("big-font");
    displayTime.classList.remove("small-font");
    } else {
        displayTime.classList.add("small-font");
        displayTime.classList.remove("big-font");
    }


    timerId = setInterval(() => {
        if (time < 0) {
            clearInterval(timerId);
            timerId = null;
            displayTime.innerText = "Time Finished!!!";
            return;
        }

        displayTime.innerText = time + ".00 Seconds Remaining";
        time--;
    }, 1000);

}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    time = 0;
    displayTime.innerText = "00:00 Seconds Remaining";
    amountTime.value = "";
}


