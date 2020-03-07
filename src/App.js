import React, { Component } from 'react'
import './App.css';
import SliderInputComponent from './components/index'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value:10,
       min:0,
       max:100
    }
  }
  

  changeHandler=(e)=>{
    this.setState({
      value:e.target.value
    })
  }

  render() {
    const {min, max, value}=this.state;
    return (  
      <div className="App">
        <SliderInputComponent
          min={min}
          max={max}
          value={value}
          changeHandler={this.changeHandler}
        ></SliderInputComponent>
      </div>
    )
  }
}

export default App
