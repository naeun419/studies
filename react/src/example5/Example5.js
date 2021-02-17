import React, {useState} from 'react'

import './Example5.css'

const Example5 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleInput = (event) => {
        const value = event.target.value

        event.target.id === '1' ? setEmail(value) : setPassword(value)
    }

    const handleButtonClicked = (event) => {
        console.log(email)
        console.log(password)
        setEmail('')
        setPassword('')

        event.preventDefault()
    }
    
    return (
        <div>
            <form onSubmit={handleButtonClicked}>
                <h3>로그인 화면</h3>
                <div className='abc'>
                    <input
                        type="text"
                        value={email}
                        id='1'
                        onChange={handleInput}
                        placeholder="E-mail"/>
                </div>
                <div className='abc'>
                    <input
                        type="password"
                        value={password}
                        id='2'
                        onChange={handleInput}
                        placeholder="Password"/>
                </div>
                <div className='bcd'>
                    아이디와 패스워드를 입력하세요!
                    <button
                        type="submit">
                        확인
                    </button>
                </div>
                {/* <div class="button">
                
                </div> */}
            </form>
        </div>
    )
}

export default Example5