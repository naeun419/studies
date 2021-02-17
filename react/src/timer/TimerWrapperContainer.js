import React from 'react'

import TimerPresenter from './TimerPresenter'
import ButtonPresenter from './ButtonPresenter'

class TimerWrapperContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: null,
            timeLeft: null
        }
        this.handleTimer = this.handleTimer.bind(this)
    }

    handleTimer (timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            let timeLeft = this.state.timeLeft -1
            if(timeLeft == 0)
            clearInterval(timer)
            this.setState({timeLeft: timeLeft})
        }, 1000)
        return this.setState({timeLeft: timeLeft, timer: timer})
    }

    render() {
        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group">
                    <ButtonPresenter time="5" handleTimer={this.handleTimer}/>
                    <ButtonPresenter time="10" handleTimer={this.handleTimer}/>
                    <ButtonPresenter time="15" handleTimer={this.handleTimer}/>
                </div>
                <TimerPresenter timeLeft={this.state.timeLeft} />
            </div>
        )
    }

}

export default TimerWrapperContainer