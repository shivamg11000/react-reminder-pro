import React from 'react';


const Reminder = ({text, timeLeft, onClick}) => (
    <div className="reminder"> 
        <div className="close" onClick={onClick}><small>X</small></div>
        <div>{text}</div>
        <div><small><em>{timeLeft}</em></small></div>  
    </div>
)

export default Reminder;