import React, { useState } from 'react';
import './AdminScreen.scss';
import Timer from '../../components/timer/Timer';
import AdminControls from '../../components/admin-controls/AdminControls';

const AdminScreen = ({ firebaseDB }) => {

    // mode: on if you wish timer to start
    // mode: off if you wish to just show time and not start
    const [timer, setTimer] = useState({
        name: 'TIMER',
        countDownTo: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        mode: 'off'
    });


    const ref = firebaseDB.ref('timer');

    const onCountDownChange = (timeLeft) => {
        ref.update(timeLeft);
    }

    return (
        <div>
            <Timer timer={timer} onCountDownChange={onCountDownChange} />
            <AdminControls
                setTimer={(t) => { setTimer({ ...t, mode: 'on' }) }}
                resetTimer={(t) => { setTimer({ ...t, mode: 'off' }) }}
            />
        </div>
    )
}

export default AdminScreen;
