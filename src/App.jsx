import { useState } from 'react'
import React, { Component } from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DrumMachine />
    )
  }
}

class DrumMachine extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div id="controls-container">
        <div id='buttons'>
          <div class='row'>
            <button>Q</button>
            <button>W</button>
            <button>E</button>
          </div>
          <div class='row'>
            <button>A</button>
            <button>S</button>
            <button>D</button>
          </div>
          <div class='row'>
            <button>Z</button>
            <button>X</button>
            <button>C</button>
          </div>
        </div>
        <div id='controls'>
          <h3>Power</h3>
          <input type='checkbox' id='power'></input>
          <label for='power' class='switch'></label>
          <div id='action-display'></div>
          
        </div>
      </div>
    )
  }
}

export default App
