import React, {useState, useEffect} from 'react'

const withMount = (WrappedComponent, id) => {
    const Inner = () => {
        const [name, setName] = useState('')

        useEffect(() => {
            setName(boxData[id].name)
        }, [])
    
        return (
        <WrappedComponent name={name}/>
        )
    }
    return Inner
}

export default withMount