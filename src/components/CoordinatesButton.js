import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    coordFunction = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return(
            <button onClick={this.coordFunction}>Mouse Coords</button>
        )
    }
}