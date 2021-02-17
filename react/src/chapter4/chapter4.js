import React from 'react';

class Chapter4 extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()   // launchClock() 실행
        this.state = {
            currentTime: (new Date()).toLocaleString('en')    // 초기 상태에 현재 시각 추가
        }
    }
    launchClock() {
        setInterval(() => {   // 시계를 시작하려면 setInterval()을 한번 호출해야 함
            console.log('Updating time...')
            this.setState({
                currentTime: (new Date()).toLocaleString('en')   // 매 초마다 현재 시각으로 상태를 갱신
            })
        }, 1000)
    }
    render() {
        console.log('Rendering Clock...')
        return <div>{this.state.currentTime}</div>   // 상태 렌더링
    }
}

export default Chapter4