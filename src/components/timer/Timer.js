import React, { useState, useEffect, useRef } from 'react';
import './Timer.scss';
import { getEndTime, processTimeLeft } from './../../utils/timer-utils';
import DisplayTimer from '../display-timer/DisplayTimer';

const Timer = ({ timer, onCountDownChange }) => {
    const [clock, setClock] = useState({
        name: '',
        display: {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        },
        timeLeft: 0
    });
    const ticker = useRef();

    const updateTimer = (updatedTimer) => {
        setClock(updatedTimer);
        onCountDownChange(updatedTimer);
    }

    useEffect(() => {
        const countDownDT = getEndTime(timer.countDownTo).getTime();
        console.log(countDownDT);
        clearInterval(ticker.current);
        if (timer.mode === 'off') {
            updateTimer({
                name: timer.name,
                display: timer.countDownTo,
                timeLeft: countDownDT
            })
        } else {
            ticker.current = setInterval(() => {
                const now = new Date().getTime();
                const timeLeft = countDownDT - now;
                if (timeLeft > 0) {
                    const display = processTimeLeft(timeLeft);
                    const updatedTimer = {
                        name: timer.name, display, timeLeft
                    };
                    updateTimer(updatedTimer);
                } else {
                    clearInterval(ticker.current);
                }
            }, 1000);
        }
    }, [timer, onCountDownChange]);



    return (
        <DisplayTimer timer={clock} />
    )
}

export default Timer;
