import React from 'react'

import './Presenter.css'

import school from './constants'

const Presenter = ({ inputChanged, buttonClicked, selectChanged, select, result, input}) => {
    const _changeValue = () => {
        const _value = school.find((elem) => {
            return elem.value === select
        })

        return _value
    }
    
    return (
        <form>
            <div class="parent">
            <div class="first">
                학교이름
            </div>
            <div class="second">
                <input
                    type='text'
                    value={input}
                    onChange={inputChanged}>
                </input>
            </div>
            <div class="second-second">
                {select}
            </div>
            <div class="third">
                <select
                    value={_changeValue()}
                    onChange={selectChanged}>
                        <option 
                            value="elementary">
                                초등학교
                        </option>
                        <option
                            value="middle">
                                중학교
                        </option>
                        <option
                            value="high">
                                고등학교
                        </option>
                        <option
                            value="college">
                                대학교
                        </option>
                </select>
            </div>
            </div>
            <div>
                <button
                    onClick={buttonClicked}>
                        확인
                </button>
            </div>
                <hr/>
                <div>
                    결과: {result}
                </div>
            
        </form>
    )
}

export default Presenter