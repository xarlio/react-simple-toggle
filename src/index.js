import React, { Component, PropTypes } from 'react'

class Toggle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: props.defaultValue ? props.defaultValue : false
    }
  }
  handleClick (evt) {
    evt.preventDefault()
    const new_state = !this.state.checked
    this.setState({
      checked: new_state
    })
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(new_state)
    }
  }
  render () {
    const class_name = this.props.className || 'toggle'
    let wrapper_class = class_name
    if (this.state.checked) {
      wrapper_class += ` ${class_name}--checked`
    }
    return <div className={wrapper_class}>
      <div className={class_name + '__left'}></div>
      <div className={class_name + '__center'}
        onClick={this.handleClick.bind(this)}
        onTouchEnd={this.handleClick.bind(this)}
      ></div>
      <div className={class_name + '__right'}></div>
    </div>
  }
}

Toggle.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func
}

export default Toggle
