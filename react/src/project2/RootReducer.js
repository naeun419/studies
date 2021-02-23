import { combineReducers } from 'redux'

import ValueReducer from './Ducks'

const RootReducer = combineReducers({
    ValueReducer,
})

export default RootReducer
