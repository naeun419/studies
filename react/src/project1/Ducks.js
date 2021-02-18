const SET_MY_SCHOOL_NAME = 'SET_MY_SCHOOL_NAME'

export const setMySchoolName = (value) => {
    return {
        type: SET_MY_SCHOOL_NAME,
        value: value
    }
}

const initialState = {
    value: ''
}

const ValueReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MY_SCHOOL_NAME: {
            return {
                ...state,
                value: action.value
            }
        }
        default : {
            return state
        }

    }
}

export default ValueReducer