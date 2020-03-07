import React, { Component } from 'react';
import './index.css';

export class SliderInputComponent extends Component {
    render() {
        const {value, min, max}=this.props;
        return (
            <input type="range" min={min} max={max} value={value} class="slider" id="myRange" onChange={this.props.changeHandler}/>
        )
    }
}

export default SliderInputComponent
