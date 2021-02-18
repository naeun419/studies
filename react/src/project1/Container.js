import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setMySchoolName } from './Ducks'

import Presenter from './Presenter'
import school from './constants'

const Container = () => {
    const { value } = useSelector(state => state.ValueReducer, [])

    const [input, setInput] = useState('')
    const [select, setSelect] = useState(school[0].name)

    const dispatch = useDispatch()

    const onInputChanged = useCallback((event) => {
        setInput(event.target.value)
    }, [])

    const onButtonClicked = useCallback((event) => {
        if (input !== '') {
            dispatch(setMySchoolName(input + select))
        }
        setInput('')
        event.preventDefault()     // button click 이후 새로고침 되지 않게
    }, [input, select])

    const handleSelectChanged = useCallback((event) => {
        const _value = event.target.value

        const _elem = school.find((elem) => {
            return elem.value === _value
        })

        _elem && setSelect(_elem.name)
    }, [])

    return (
        <Presenter
            inputChanged={onInputChanged}
            buttonClicked={onButtonClicked}
            selectChanged={handleSelectChanged}
            select={select}
            result={value}
            input={input}/>
    )
}

export default Container