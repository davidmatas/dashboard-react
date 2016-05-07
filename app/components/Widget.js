import React from 'react'

class Widget extends React.Component {
  constructor(props) {
    super()
    this.showHelper = {
      display: props.helper ? 'inline-block' : 'none'
    }
  }

  render() {
    return (
      <div className="widget-content">
        <span className="widget-maintext">
          <span className="widget-bigData">
            {this.props.value}
            <span style={this.showHelper} className="widget-helper"></span>
          </span>
          <span className="widget-sufix">{this.props.unit}</span>
        </span>
        <span className="widget-subtext">{this.props.name}</span>
      </div>
    )
  }
}

export default Widget
