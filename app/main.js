import 'multiple.js/multiple.css'
import Dashbox from './components/Dashbox'
import {Widget} from './components/widgets'
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss'

class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h2><span>Hello</span>, this is a React dashboard</h2>
        <div className="container">
          <Dashbox bgSelector="blue" size="40">
            <Widget value='16' unit='24' name="Tasks Completed" helper="true" />
          </Dashbox>
          <Dashbox bgSelector="green" size="15">
            <Widget value='99' unit="%" name="hapiness" />
          </Dashbox>
          <Dashbox bgSelector="green" size="30">
            <Widget value='🌤' helper="true" unit="🌔" name="wheather" />
          </Dashbox>
          <Dashbox bgSelector="blue" size="15">
            <Widget value='→' />
          </Dashbox>
          <Dashbox bgSelector="blue" size="25">
            <Widget value='36' name="Temperature" />
          </Dashbox>
          <Dashbox bgSelector="blue" size="25">
            <Widget value='98' unit="bmp" name="Heart Rate" />
          </Dashbox>
          <Dashbox bgSelector="green" size="25">
            <Widget value='12' unit="cmHg" name="Blood Pressure" />
          </Dashbox>
          <Dashbox bgSelector="green" size="25">
            <Widget value='118' unit="mgdl" name="Blood Glucose" />
          </Dashbox>
          <Dashbox bgSelector="blue" size="25">
            <Widget value='76' unit="kg" name="Body Weight" />
          </Dashbox>
          <Dashbox bgSelector="blue" size="25">
            <Widget value='28' unit="%" name="Fat percentage" />
          </Dashbox>
          <Dashbox bgSelector="green" size="25">
            <Widget value='680' unit="kcal" name="Avg. consumption" />
          </Dashbox>
          <Dashbox bgSelector="green" size="25">
            <Widget value='85' unit="%" name="Body Hydration" />
          </Dashbox>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
