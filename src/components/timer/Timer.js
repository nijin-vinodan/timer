import React, { useState, useEffect, useRef } from 'react';
import './Timer.scss';
import { getEndTime, processTimeLeft } from './../../utils/timer-utils';
import DisplayTimer from '../display-timer/DisplayTimer';

const Timer = ({ countdownTo, notify }) => {
    const [timer, setTimer] = useState({
        display: {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        },
        timeLeft: 0
    });
    const ticker = useRef();

    useEffect(() => {
        const countDownDT = getEndTime(countdownTo).getTime();
        clearInterval(ticker.current);

        ticker.current = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = countDownDT - now;
            if (timeLeft > 0) {
                const display = processTimeLeft(timeLeft);
                const updatedTimer = {
                    display, timeLeft
                };
                setTimer(updatedTimer);
                notify(updatedTimer);
            } else {
                clearInterval(ticker.current);
            }
        }, 1000);
    }, [countdownTo, notify]);

    return (
        <DisplayTimer timer={timer} />
    )
}

export default Timer;
