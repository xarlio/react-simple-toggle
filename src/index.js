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
  className: PropTypes.string
}

export default Toogle
