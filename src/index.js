import React, { Component, PropTypes } from 'react'

class Toogle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true
    }
  }
  handleClick () {
    this.setState({
      checked: !this.state.checked
    })
  }
  render () {
    let className = 'toogle'
    if (this.props.className) {
      className += ` ${this.props.className}`
    }
    if (this.state.checked) {
      className += ' toogle--checked'
    }
    return <div className={className}>
      <div className='toogle-left'></div>
      <div className='toogle-center' onClick={this.handleClick.bind(this)}></div>
      <div className='toogle-right'></div>
    </div>
  }
}

Toogle.propTypes = {
  className: PropTypes.string
}

export default Toogle
