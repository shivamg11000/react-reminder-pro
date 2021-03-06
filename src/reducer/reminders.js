
//returns plain js object
const reminder = ({id,text,dueDate=""}) => ({
    id,
    text,
    dueDate
}) 

// reducer
const reminders = (state=[], action) => {
    let reminders = null

    switch(action.type){
        case "ADD_REMINDER":
           reminders = [...state,reminder(action)]
           return reminders
         
        case "DELETE_REMINDER":
           reminders = state.filter(reminder => reminder.id!==action.id)
           return reminders   

        case "CLEAR_ALL_REMINDERS":
           reminders = []
           return reminders   

        default:
            return state    
    }
}


export default reminders;