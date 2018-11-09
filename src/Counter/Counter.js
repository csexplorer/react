import React, {Component} from 'react'
import Auxilary from '../hoc/Auxilary'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <Auxilary>
        <h1>Counter: { this.state.counter }</h1>
        <Counter2 />
        <button onClick={this.addCounter}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
      </Auxilary>
    )

    // return [
    //     <h1 key={'1'}>Counter: { this.state.counter }</h1>,
    //     <button key={2} onClick={this.addCounter}>+</button>,
    //     <button key={3} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    // ]
  }
}