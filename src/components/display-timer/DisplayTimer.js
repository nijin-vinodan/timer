import React from 'react';
import './DisplayTimer.scss';


const DisplayTimer = ({ timer }) => {
    const { display, timeLeft, name = 'TIMER' } = timer;

    let clockStyle;
    if (timeLeft < 60000) {
        clockStyle = "clock alert"
    } else if (timeLeft < 300000) {
        clockStyle = "clock warning"
    } else {
        clockStyle = "clock"
    }

    return (
        <div className="display-timer">
            <h3>{name}</h3>
            <div className={clockStyle}>
                {Number(display.days) > 0 && <div className="days">{display.days}</div>}

                {Number(display.hours) > 0 && <div className="hours">{display.hours}</div>}

                <div className="mins">{display.minutes}</div>

                <div className="sec">{display.seconds}</div>
            </div>
            <h3>CODES & GEARS 2020</h3>
        </div>
    )
}

export default DisplayTimer;
