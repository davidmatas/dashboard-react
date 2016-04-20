import React from 'react'
import ReactDOM from 'react-dom'
import Dashbox from './components/Dashbox'
import Widget from './components/Widget'
import widgets from './data.js'
import 'multiple.js/multiple.css'
import './scss/style.scss'

class Dashboard extends React.Component {
  render() {
    let widgetsComponents = widgets.map((widget, index) =>
      (
       <Dashbox bgSelector={widget.color} size={widget.size} key={index}>
          <Widget value={widget.value}
                  unit={widget.unit}
                  name={widget.name}
                  helper={widget.helper} />
        </Dashbox>
      )
    )

    return (
      <div className="wrapper">
        <h2><span>Hello</span>, this is a React dashboard</h2>
        <div className="container">
          {widgetsComponents}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Dashboard />,
  document.getElementById('app')
)
