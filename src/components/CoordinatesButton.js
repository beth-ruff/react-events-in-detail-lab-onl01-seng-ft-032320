// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    
    handleClick = (event) => {
        let x_coord = event.clientX;
        let y_coord = event.clientY;
        let mouseCoordinates = [x_coord, y_coord];
        this.props.onReceiveCoordinates(mouseCoordinates);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Hi!</button>
            </div>
        )
    }
}

