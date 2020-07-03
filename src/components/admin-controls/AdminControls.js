import React from 'react';
import './AdminControls.scss';
import Button from '../button/Button';


const AdminControls = ({ timer, setCountDown }) => {

    const startTimer = (countDown) => {
        setCountDown(countDown);
    }

    return (
        <div className="admin-controls">
            <div className="">
                <Button
                    label="START PRESENTATION"
                    onClick={() => startTimer({
                        days: 0,
                        hours: 0,
                        minutes: 20,
                        seconds: 0
                    })}
                />
                <Button
                    label="START Q & A"
                    onClick={() => startTimer({
                        days: 0,
                        hours: 0,
                        minutes: 10,
                        seconds: 0
                    })}
                />
            </div>

            <div>

            </div>
        </div>
    )
}

export default AdminControls;
