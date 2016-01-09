import React, { Component, PropTypes } from 'react'

class Toogle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true
    }
  }
  handleClick () {
    const new_state = !this.state.checked
    this.setState({
      checked: new_state
    })
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(new_state)
    }
  }
  render () {
    const class_name = this.props.className || 'toogle'
    let wrapper_class = class_name
    if (this.state.checked) {
      wrapper_class += ` ${class_name}--checked`
    }
    return <div className={wrapper_class}>
      <div className={class_name + '__left'}></div>
      <div className={class_name + '__center'} onClick={this.handleClick.bind(this)}></div>
      <div className={class_name + '__right'}></div>
    </div>
  }
}

Toogle.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
}

export default Toogle
