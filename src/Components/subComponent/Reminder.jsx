import React, { Component } from 'react';


class Reminder extends Component{
    constructor(props){
        super(props)
        this.state = { reference : null} // saving the interval reference

    }

    componentDidMount(){
        const interval = setInterval(() => this.forceUpdate(),60000)
        this.setState({reference : interval})
    }
    
    componentWillUnmount(){
        const interval = this.state.reference
        clearInterval(interval)
    }

    render(){
        return (
            <div className="reminder"> 
                <div className="close" onClick={this.props.onClick}><small>X</small></div>
                <div>{this.props.text}</div>
                <div><small><em>{this.props.timeLeft}</em></small></div>  
            </div>
        )
    }
    
}

export default Reminder;