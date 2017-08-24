
import { createStore } from 'redux';
import reducer from './reducer';


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = createStore(reducer, persistedState)

//for medium sized applications
store.subscribe(() => {
    Promise.resolve().then(()=> localStorage.setItem('reduxState', JSON.stringify(store.getState()) ))
})

/* for small applications
store.subscribe(() => {
  localStorage.setItem('reduxState',JSON.stringify(store.getState()))
})
*/

export default store;
