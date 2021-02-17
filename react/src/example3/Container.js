import React from 'react'

import Presenter from './Presenter'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleButtonPressed = this.handleButtonPressed.bind(this)
    }

    handleButtonPressed(value) {
        value === '-'
        ? this.setState({ count: --this.state.count})
        : this.setState({ count: ++this.state.count})
    }

    render() {
        return (
            <Presenter
                count={this.state.count}
                handleButtonPressed={this.handleButtonPressed}>
            </Presenter>
        )
    }
}

export default Container