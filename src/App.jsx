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
    this.state = {
      power: true,
      volume: 50,
      bank: false
    }
  }

  handleVolumeChange = (event) => {
    this.setState({
      volume: event.target.value
    })
    const actionDisplay = document.getElementById('action-display')
    actionDisplay.innerHTML = `Volume: ${event.target.value}`
    
    setTimeout(() => {
      actionDisplay.innerHTML = ''
    }, 1300);
  }

  handlePowerChange = (event) => {
    this.setState({
      power: event.target.checked
    });
    const actionDisplay = document.getElementById('action-display');
    actionDisplay.innerHTML = ''
  }

  handleBankChange = (event) => {
    this.setState({
      bank: event.target.checked
    })
    const actionDisplay = document.getElementById('action-display');
    actionDisplay.innerHTML = `${event.target.checked ? 'Smooth Piano Kit' : 'Heater Kit'}`
  }

  handleclick = (event) => {
    const actionDisplay = document.getElementById('action-display')
    actionDisplay.innerHTML = event.target.id
  }

  




  render() {
    return (
      <div id="controls-container">
        <div id='buttons'>
          <div class='row'>
            <button onClick={this.handleclick} id={this.state.bank ? 'Chord 1' : 'Heater 1'} disabled={!this.state.power}>Q</button>
            <button onClick={this.handleclick} id={this.state.bank ? 'Chord 2' : 'Heater 2'} disabled={!this.state.power}>W</button>
            <button onClick={this.handleclick} id={this.state.bank ? 'Chord 3' : 'Heater 3'} disabled={!this.state.power}>E</button>
          </div>
          <div class='row'>
            <button onClick={this.handleclick} id={this.state.bank ? 'Shaker' : 'Heater 4'} disabled={!this.state.power}>A</button>
            <button onClick={this.handleclick} id={this.state.bank ? 'Open HH' : 'Clap'} disabled={!this.state.power}>S</button>
            <button onClick={this.handleclick} id={this.state.bank ? 'Closed HH' : 'Open HH'} disabled={!this.state.power}>D</button>
          </div>
          <div class='row'>
          <button onClick={this.handleclick} id={this.state.bank ? 'Punchy Kick' : "Kick n' Hat"} disabled={!this.state.power}>Z</button>
            <button onClick={this.handleclick} id={this.state.bank ? 'Side Stick' : 'Kick'} disabled={!this.state.power}>X</button>
            <button onClick={this.handleclick} id={this.state.bank ? 'Chord 3' : 'Snare'} disabled={!this.state.power}>C</button>
          </div>
        </div>
        <div id='controls'>
          <div class="switch-cont">
            <h3>Power</h3>
            <input type='checkbox' id='power' class="check" value={this.state.power} onChange={this.handlePowerChange}></input>
            <label for='power' class='switch'></label>
          </div>
          <div id='action-display'>

          </div>
          <div id='range-cont'>
            <input type='range' min='0' max='100' steps='1' onChange={this.handleVolumeChange} disabled={!this.state.power}></input>
          </div>
          <div class="switch-cont">
            <h3>Bank</h3>
            <input type='checkbox' id='bank' class="check" value={this.state.bank} onChange={this.handleBankChange} disabled={!this.state.power}></input>
            <label for='bank' class='switch'></label>
          </div>
        </div>
      </div>
    )
  }
}

export default App
