import React, {useState, useEffect} from 'react'

const Menu = (props) => {
    const [lists, setList] = useState([])

    useEffect(() => {
        setList(require('./data').default)
    }, [])

    return (
        <div>{
            lists.map((value) => {
                return (
                <a href="https://electronic-moongchi.tistory.com/87">
                    {value}
                    <br/>
                </a>
                )
            })
            }
        </div>
    )
}

export default Menu