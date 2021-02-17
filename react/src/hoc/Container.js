import React, {useState, useEffect} from 'react'

import withMount from './withMount'
import buttonData from './buttonData'


const Btn1 = withMount((props) => {
    return (
        <div>
            <button
                type="button">
                    {props.name}
            </button>
        </div>
    )

}, 0)

const Btn2 = withMount((props) => {
    return (
        <div>
            <button
                type="button">
                    {props.name}
            </button>
        </div>
    )
}, 1)

const Btn3 = withMount((props) => {
    return (
        <div>
            <button
                type="button">
                    {props.name}
            </button>
        </div>
    )
}, 2)

const Btn4 = withMount((props) => {
    return (
        <div>
            <button
                type="button">
                    {props.name}
            </button>
        </div>
    )
}, 3)



const Button1 = (props) => {
    const [name, setName] = useState('')

    useEffect(()=> {
        setName(buttonData[0].name)
    })
    return (
        <div>
        <button>
            {name}
        </button>
        </div>
    )
}
const Button2 = (props) => {
    const [name, setName] = useState('')

    useEffect(()=> {
        setName(buttonData[1].name)
    })
    return (
        <div>
        <button>
            {name}
        </button>
        </div>
    )
}
const Button3 = (props) => {
    const [name, setName] = useState('')

    useEffect(()=> {
        setName(buttonData[2].name)
    })
    return (
        <div>
        <button>
            {name}
        </button>
        </div>
    )
}
const Button4 = (props) => {
    const [name, setName] = useState('')

    useEffect(()=> {
        setName(buttonData[3].name)
    })
    return (
        <div>
        <button>
            {name}
        </button>
        </div>
    )
}
const Container = (props) => {
    return (
        <>
        <div>
            <Btn1/>
            <Btn2/>
            <Btn3/>
            <Btn4/>
        </div>
        <br/>
        <div>
            <Button1/>
            <Button2/>
            <Button3/>
            <Button4/>
        </div>
        </>

    )
}

export default Container