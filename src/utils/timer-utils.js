/**
 * Get End Time to Count Down To
 * @param {} time 
 */
export const getEndTime = (countdownTo) => {
    let currentDT = new Date();

    if (countdownTo.days) {
        countdownTo.hours += countdownTo.days * 24;
    }

    if (countdownTo.hours) {
        currentDT.setHours(currentDT.getHours() + countdownTo.hours);
    }

    if (countdownTo.minutes) {
        currentDT.setMinutes(currentDT.getMinutes() + countdownTo.minutes);
    }

    if (countdownTo.seconds) {
        currentDT.setSeconds(currentDT.getSeconds() + countdownTo.seconds);
    }

    return currentDT;
}

export const processTimeLeft = (timeLeft) => {

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Optimize this
    days = days.toString().length === 1 ? `0${days}` : days;
    hours = hours.toString().length === 1 ? `0${hours}` : hours;
    minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
    seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;

    return {
        days,
        hours,
        minutes,
        seconds
    }
}