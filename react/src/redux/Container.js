import React, { useState, useCallback } from 'react'

import { connect } from 'react-redux'

import { setValue } from './CounterDucks'
import Presenter from './Presenter'

const Container = ({ f, dispatch }) => {
    const [ input, setInput ] = useState(f)

    const onInputChanged = useCallback((event) => {
        setInput(event.target.value)
    }, [])

    const onButtonClicked = useCallback(() => {
        if (input !== '') {
            dispatch(setValue(input))
        }
        setInput('')
    }, [input])

    return (
        <Presenter
            inputChanged={onInputChanged}
            buttonClicked={onButtonClicked}
            input={input}
            value={f} />
    )
}

const mapStateToProps = (state) => ({
    f: state.ValueReducer.value,
})

export default connect(mapStateToProps)(Container)