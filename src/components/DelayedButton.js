import React, {Component} from 'react'

export default class DelayedButton extends Component {
    delayFunction = (e) => {
        e.persist()
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.delayFunction}>Delayed Button</button>
        )
    }
}