import loggedReducer from './loggedReducer';
import counterReducer from './counterReducer';
// para combinar los reducers usamos una herramienta de redux para combinarlas
import {combineReducers} from 'redux';

//se le pase como parametro un objeto
const allReducers = combineReducers({
       counter: counterReducer,
       isLogged: loggedReducer 
})

export default allReducers;