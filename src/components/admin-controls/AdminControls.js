import React from 'react';
import './AdminControls.scss';
import Button from '../button/Button';


const timers = {
    presentation: {
        name: 'PRESENTATION',
        countDownTo: { days: '00', hours: '00', minutes: '20', seconds: '00' }
    },
    qa: {
        name: 'Q & A',
        countDownTo: { days: '00', hours: '00', minutes: '10', seconds: '00' }
    }
}

const AdminControls = ({ setTimer, resetTimer }) => {
    return (
        <div className="admin-controls">
            <div className="button-panels">
                <Button
                    label="START PRESENTATION"
                    onClick={() => setTimer(timers.presentation)}
                />
                <Button
                    label="START Q & A"
                    onClick={() => setTimer(timers.qa)}
                />
            </div>
            <div className="button-panels">
                <Button
                    label="RESET PRESENTATION"
                    onClick={() => resetTimer(timers.presentation)}
                />
                <Button
                    label="RESET Q & A"
                    onClick={() => resetTimer(timers.qa)}
                />
            </div>
        </div>
    )
}

export default AdminControls;
