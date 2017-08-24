import React from 'react';
import moment from 'moment';

import Reminder from './Reminder';


const RemindersList = ({reminders=[], onReminderClick}) => (
    <div className="reminder-list">
        {
            reminders.slice().reverse().map(reminder => {

                const timeLeft = reminder.dueDate==="" ?
                                   "" : 
                                   moment(reminder.dueDate).fromNow()

                return (
                    <Reminder 
                        key={reminder.id}
                        {...reminder}
                        timeLeft={timeLeft}
                        onClick={() => onReminderClick(reminder.id)}
                        />
                )
            })
        }
    </div>    
)



export default RemindersList;