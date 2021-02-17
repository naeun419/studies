// ACTION_TYPE
const SET_VALUE = 'SET_VALUE'


// ACTION_CREATOR_FUNCTION
export const setValue = (value) => {
    return {
        type: SET_VALUE,
        value: value
    }
}

// REDUCER_INITIAL_STATE

const initialState = {
    value: 0
}

const ValueReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VALUE: {
            return {
                ...state,
                value: action.value
            }
        }
        default:
            return state
    }
}

export default ValueReducer