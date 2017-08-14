import store from '../store';

// initiall id is 1 for the first reminder, when no reminders
let nextReminderId = Math.max(0, ...store.getState().reminders.map(r => r.id) )


export const addReminder = (text,dueDate) => ({
    type: "ADD_REMINDER",
    text,
    dueDate,
    id: ++nextReminderId
})

export const deleteReminder = (id) => ({
    type: "DELETE_REMINDER",
    id
})

export const clearAllReminders = () => ({
    type: "CLEAR_ALL_REMINDERS"
})