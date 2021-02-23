const SEND_INVESTIGATION_INFO = 'SEND_INVESTIGATION_INFO'

export const sendInvestigationInfo = (name, age, hobby, hobbyEtc, phone, birthday, etc) => {
    return {
        type: SEND_INVESTIGATION_INFO,
        name: name,
        age: age,
        hobby: hobby,
        hobbyEtc: hobbyEtc,
        phone: phone,
        birthday: birthday,
        etc: etc
    }
}

const initialState = {
    name: '',
    age: '',
    hobby: [],
    hobbyEtc: '',
    phone: '',
    birthday: '2021-02-19',
    etc: ''
}

const ValueReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_INVESTIGATION_INFO: {
            return {
                ...state,
                name: action.name,
                age: action.age,
                hobby: action.hobby,
                hobbyEtc: action.hobbyEtc,
                phone: action.phone,
                birthday: action.birthday,
                etc: action.etc
            }
        }
        default :
            return state
    }
}

export default ValueReducer