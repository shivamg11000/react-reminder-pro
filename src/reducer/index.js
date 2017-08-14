import { combineReducers } from 'redux'; 

import reminders from './reminders';

const reminderApp = combineReducers({
    reminders
})

export default reminderApp;