import { combineReducers } from 'redux'

import ValueReducer from './CounterDucks'

const RootReducer = combineReducers({
    ValueReducer,
})

export default RootReducer