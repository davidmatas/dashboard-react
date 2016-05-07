import Multiple from 'multiple.js'
import React from 'react'

const mainColor = 'blue'
const defaultSize = '33'

class Dashbox extends React.Component {
  constructor(props) {
    super()
    this.bgSelector = props.bgSelector ? props.bgSelector : mainColor
    this.style = {
      width: `calc(${props.size ? props.size : defaultSize}% - 10px)`
    }
  }

  getClassNames() {
    return `box ${this.bgSelector}`
  }

  getBackgrounds() {
    return this.bgSelector === mainColor ?
      'radial-gradient(48% center, circle, rgba(39, 52, 99, 0.9) 15%, rgba(139, 66, 86, 0.9))' :
      'radial-gradient(45% center, circle, rgba(39, 184, 196, 0.9) 15%, rgba(178,194,140,0.9))'
  }

  componentDidMount() {
    new Multiple({
      selector: '.' + this.bgSelector,
      background: this.getBackgrounds()
    });

  }

  render() {
    return <div style={this.style} className={this.getClassNames()}>{this.props.children}</div>
  }
}

export default Dashbox
