import React, {useState} from 'react';

const Example4 = () => {
    const [textInput, setTextInput] = useState('')
    const [text, setText] = useState([])

   const handleButtonPressed = (event) => {
       let newText = text.slice()
       
       newText.push(textInput)

       setText(newText)
       setTextInput('')
   }

   const handle = (event) => {
        setTextInput(event.target.value)
   }

    return (
        <div>
            <span>
                입력 값:
            <input
                type="text"
                value={textInput}
                onChange={handle}/>
            <button onClick={handleButtonPressed}>
                확인
            </button>
            </span>
            <br/>
            <span>
                입력 결과:
                {
                    text.map((value) => {
                        return (
                            <span>
                                {value + ','}
                            </span>
                        )
                    })}
                </span>
        </div>

    )
}

export default Example4