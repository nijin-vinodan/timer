import React, { useState } from 'react';
import './AdminScreen.scss';
import Timer from '../../components/timer/Timer';
import AdminControls from '../../components/admin-controls/AdminControls';

const AdminScreen = ({ firebaseDB }) => {

    const [countdownTo, setCountdownTo] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const setCountDown = (countDown) => {
        setCountdownTo(countDown);
    }

    const ref = firebaseDB.ref('timer');

    const setTimeLeft = (timeLeft) => {
        console.log(timeLeft);
        ref.update(timeLeft);
    }

    return (
        <div>
            <Timer countdownTo={countdownTo} notify={setTimeLeft} />
            <AdminControls setCountDown={setCountDown} />
        </div>
    )
}

export default AdminScreen;
