import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddReminder from './subComponent/AddReminder';
import RemindersList from './subComponent/RemindersList';
import ClearAll from './subComponent/ClearAll';

import { addReminder, deleteReminder, clearAllReminders } from '../actions/ReminderApp.js'

import './ReminderApp.css';

class ReminderApp extends Component {
    render() {
        const reminders = this.props.reminders
        return (
            <div className="reminder-app">
                <AddReminder addReminder={this.props.addReminder}/>
                <RemindersList reminders={reminders} onReminderClick={this.props.deleteReminder} /> 
                {!!reminders.length && <ClearAll onClick={this.props.clearAllReminders} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reminders: state.reminders
})

const mapDispatchToProps = {
    addReminder,
    deleteReminder,
    clearAllReminders
}

// container
export default connect(mapStateToProps,mapDispatchToProps)(ReminderApp);