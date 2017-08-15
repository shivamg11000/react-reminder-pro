import React, { Component } from 'react';


class AddReminder extends Component {
    constructor(props) {
        super(props)
        this.state= {
            reminder: "",
            date: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this) 
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addReminder(this.state.reminder,this.state.date)
        this.setState({
             reminder: "",
             date: ""
            }) 
    }

    handleInputChange(e) {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div className="add-reminder">
                <form action="submit" onSubmit={this.handleSubmit} >
                    <input 
                        type="text" placeholder="I have to..."
                        autoComplete="off" autoCorrect="off" spellCheck="false"
                        value={this.state.reminder} name="reminder"
                        onChange={this.handleInputChange} 
                        required
                      />
                    <input 
                        type="datetime-local"
                        value={this.state.date}
                        name="date"
                        onChange={this.handleInputChange}
                      />
                    <input type="submit" value="Add Reminder"/>
                </form>
            </div>
        );
    }
}



export default AddReminder;