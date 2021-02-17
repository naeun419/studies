import React, {useState, useEffect} from 'react'

import buttonData from './buttonData'

const withMount = (WrappedComponent, id) => {
    const Inner = () => {
        const [name, setName] = useState('')

        useEffect(() => {
            setName(buttonData[id].name)
        }, [])

        return (
            <WrappedComponent name={name}/>
        )
    }
    return Inner
}

export default withMount