import React, { Fragment } from 'react'
import classes from './Car.module.css'
import withClass from '../hoc/withClass'
// import PropTypes from 'prop-types'

class Car extends React.Component {

  constructor (props) {
    super(props)

    this.inputRef = React.createRef()
  }
  componentDidMount() {
    if (this.props.index === 0)
      this.inputRef.current.focus()
  }
  render() {
    const inputClasses = [classes.input]
    if (this.props.name !== '')
      inputClasses.push(classes.green)
    else
      inputClasses.push(classes.red)

    if (this.props.name.length > 4)
      inputClasses.push(classes.bold)

    return (
      <Fragment>
        <h1 style={{margin: 0}}>Carname: { this.props.name }</h1>
        <h3 style={{margin: '5px 0 10px'}}>Year: <em>{ this.props.year }</em></h3>
        <input
          ref={this.inputRef}
          className={inputClasses.join(' ')}
          type="text"
          onChange={ this.props.onChangeName }
          value={ this.props.name }
        />
        <button onClick={ this.props.onDelete }>Delete</button>
      </Fragment>
    )
  }
}

// Car.propTypes = {
//   index: PropTypes.number,
//   name: PropTypes.string,
//   year: PropTypes.number,
//   onChangeName: PropTypes.func,
//   onDelete: PropTypes.func
// }

export default withClass(Car, classes.Car)