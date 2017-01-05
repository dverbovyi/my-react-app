import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { session } from './Session';

const rootReducer = combineReducers({
  session,
  routing
})

export default rootReducer