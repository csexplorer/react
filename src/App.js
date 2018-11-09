import React, { Component } from 'react'
import './App.css'
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      clicked: false,
      cars: [
        {name: "Ford", year: 2018},
        {name: "Audi", year: 2017},
        {name: "Mazda", year: 2010}
      ],
      pageTitle: "React Components",
      showCars: false
    }
  }

  changeName (name, index) {
    const car = this.state.cars[index]
    car.name = name
    let cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler (index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render() {
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              index={index}
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event => this.changeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }
    return (
      <div className="App">
        <h1>{ this.state.pageTitle }</h1>
        
        <ClickedContext.Provider value={this.props.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <hr/>

        <button style={{marginTop: 20}} className={"AppButton"} onClick={this.toggleCarsHandler}>Toggle cars</button>

        <button onClick={() => this.setState({clicked: true})}>change clicked</button>

        <div style={{
          width: '400px',
          paddingTop: '20px',
          margin: 'auto'
        }}>
          { cars }
        </div>
      </div>
    )
  }
}

export default App
