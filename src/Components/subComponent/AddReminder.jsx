import React from 'react';


let text;
let dueDate;

const AddReminder = ({addReminder}) => (
    <div className="add-reminder">
        <form 
            action="submit" 
            onSubmit={e => {
                e.preventDefault()
                addReminder(text,dueDate)
                }}
            >
            <input 
                type="text" placeholder="I have to..." 
                onChange={e => text=e.target.value}
                maxLength="30" 
                required
                />
            <input 
                placeholder="on.."
                type="datetime-local"
                onChange={e => dueDate=e.target.value}
                />
            <input type="submit" value="Add Reminder"/>
        </form>
    </div>
)


/*
class AddReminder extends Component {
    constructor(props) {
        super(props)
        this.state= {
            text: "",
            dueDate: ""
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {console.log("render")
        return (
            <div className="add-reminder">
                <form 
                  action="submit" 
                  onSubmit={e => {
                      e.preventDefault()
                      this.props.addReminder(this.state.text,this.state.dueDate)
                      }}
                >
                    <input 
                      type="text" placeholder="I have to..." 
                      onChange={e => this.setState({text:e.target.value})} 
                      required
                      />
                    <input 
                      type="datetime-local"
                      onChange={e => this.setState({dueDate:e.target.value})}
                    />
                    <input type="submit" value="Add Reminder"/>
                </form>
            </div>
        );
    }
}
*/


export default AddReminder;