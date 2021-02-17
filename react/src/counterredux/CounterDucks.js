const SET_INCREMENT = 'SET_INCREMENT'

const SET_DECREMENT = 'SET_DECREMENT'

export const setIncrement = () => {
    return {
        type: SET_INCREMENT
    }
}

export const setDecrement = () => {
    return {
        type: SET_DECREMENT
    }
}

const initialState = {
    number: 0
}

const ValueReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INCREMENT: {
            return {
                number: state.number + 1
            }
        }
        case SET_DECREMENT: {
            return {
                number: state.number - 1
            }
        }
        default:
            return state
    }
}

export default ValueReducer