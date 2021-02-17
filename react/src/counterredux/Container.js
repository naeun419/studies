import React, {useState, useCallback} from 'react'

import {connect, useSelector, useDispatch} from 'react-redux'

import {setIncrement, setDecrement} from './CounterDucks'
import Presenter from './Presenter'

const Container = () => {
    const { number } = useSelector(state => state.ValueReducer, [])    // useSelector()는 리덕스 스토어의 데이터를 추출할 수 있으며, 개념적으로 mapStateToProps와 거의 같음
    const dispatch = useDispatch()

    // useDispatch() with useCallback()
    // 태그요소에서 로직 분리, 가독성을 높힘
    // 리액트 훅의 useCallback()을 사용하여 자식 구성요소의 불필요한 렌더링 방지
    //      1. 부모 컴포넌트 > 자식 컴포넌트로 콜백함수 props 전달
    //      2. 부모 컴포넌트 화면이 랜더링 될 때마다 콜백함수 생성(참조링크 변동)
    //      3. 자식 컴포넌트는 콜백함수 props의 참조링크 변동으로 인한 렌더링 시도


    const onDecreButtonClicked = useCallback(() => {
        dispatch(setDecrement())
    }, [])

    const onIncreButtonClicked = useCallback(() => {
        dispatch(setIncrement())
    }, [])

    return (
        <Presenter
        decreButtonClicked={onDecreButtonClicked}
        increButtonClicked={onIncreButtonClicked}
        number={number} />
    )
}

// const mapStateToProps = (state) => ({
//     n: state.ValueReducer.number,
// })

// export default connect(mapStateToProps)(Container)
export default Container