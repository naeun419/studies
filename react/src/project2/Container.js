import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { sendInvestigationInfo } from './Ducks'

import Presenter from './Presenter'
import hobbies from './constants'

const Container = () => {
    const dispatch = useDispatch()
    const value = useSelector(state=> state.ValueReducer, [])

    const [inputs, setInputs] = useState({
        name: "",
        age: "",
        etc: ""
    })

    const [hobby, setHobby] = useState([])
    const [checkhobby, setCheckhobby] = useState(false)
    const [altmsg, setAltMsg] = useState('')
    const [hobbyEtc, setHobbyEtc] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState("2021-02-19")

    const {
        name, age, etc
    } = inputs;

    const onChange = useCallback((event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        })
    }, [inputs])


    const onHobbyChanged = useCallback((event) => {
        let _hobby = [...hobby]
        if (event.target.checked == true) {
            if (event.target.value !== hobbies[4].value) {
                _hobby.push(event.target.value)
            } else{
                setCheckhobby(true)
            }
        } else {
            if (event.target.value === hobbies[4].value) {
                setCheckhobby(false)
                setHobbyEtc('')
            }
            let idx = _hobby.findIndex((element) => {
                return element === event.target.id
            })
            if (idx > -1) {
                _hobby.splice(idx, 1)
            }
        }

        setHobby(_hobby)
    }, [hobby])

    const onHobbyEtcChanged = useCallback((event) => {
        setHobbyEtc(event.target.value)
    }, [])

    const onBirthdayChanged = useCallback((event) => {
        setBirthday(event.target.value)
    }, [])

    const onPhoneChanged = useCallback((event) => {
        setPhone(event.target.value)
        console.log(phone)
    }, [])

    const onButtonClicked = useCallback((event) => {
        let _age = inputs.age
        let _result = false

        for (let c of _age) {
            let num = Number(c)

            if (isNaN(num)) {
                _result = true
                break
            }
        }

        _result === true
        ? setAltMsg("숫자만 입력 가능합니다")
        : setAltMsg("")

        if (hobbyEtc.length > 0) {
            hobby.push(hobbyEtc)
        }
        dispatch(sendInvestigationInfo(name, age, hobby, hobbyEtc, 
                                        phone, birthday, etc))
        event.preventDefault()
    }, [name, age, hobby, hobbyEtc, phone, birthday, etc])


    return (
        <Presenter
            hobbyChanged={onHobbyChanged}
            hobbyEtcChanged={onHobbyEtcChanged}
            phoneChanged={onPhoneChanged}
            birthdayChanged={onBirthdayChanged}
            buttonClicked={onButtonClicked}
            onChange={onChange}
            name={name}
            age={age}
            altmsg={altmsg}
            checkhobby={checkhobby}
            hobbyEtc={hobbyEtc}
            birthday={birthday}
            etc={etc}/>
    )
}

export default Container