import React, { useState, useEffect } from 'react';
import './HomeScreen.scss';
import DisplayTimer from '../../components/display-timer/DisplayTimer';

const HomeScreen = ({ firebaseDB }) => {

    const [timer, setTimer] = useState({
        display: {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        },
        timeLeft: 0
    });

    useEffect(() => {
        firebaseDB.ref("timer").on("value", snapshot => {
            setTimer(snapshot.val());
        });
    }, []);

    return (
        <div>
            <DisplayTimer timer={timer} />
        </div>
    )
}

export default HomeScreen;
