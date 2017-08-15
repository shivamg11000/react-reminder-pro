import React from 'react';


import Reminder from './Reminder';


const RemindersList = ({reminders=[], onReminderClick}) => (
    <div className="reminder-list">
        {
            reminders.slice().reverse().map(reminder => {
                return (
                    <Reminder 
                        key={reminder.id}
                        {...reminder}
                        onClick={() => onReminderClick(reminder.id)}
                        />
                )
            })
        }
    </div>    
)



export default RemindersList;