import React from 'react';
import './Button.scss';


const Button = ({ label, onClick }) => {
    return (
        <button className="customButton" onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;
