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
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleVolumeChange = (event) => {
    this.setState({
      volume: event.target.value
    })
    const actionDisplay = document.getElementById('action-display');
    actionDisplay.innerHTML = `Volume: ${event.target.value}`;
    audio.volume = event.target.value / 100;
    
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
    const actionDisplay = document.getElementById('action-display');
    actionDisplay.innerHTML = event.target.id
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  


  handleKeyDown = (event) => {
    const actionDisplay = document.getElementById('action-display');
    const heater1 = new Audio('sounds/Heater-1.mp3');
    const heater2 = new Audio('sounds/Heater-2.mp3');
    const heater3 = new Audio('sounds/Heater-3.mp3');
    const heater4 = new Audio('sounds/Heater-4_1.mp3');
    const clap = new Audio('sounds/Clap.mp3');
    const openHH = new Audio('sounds/OpenHH.mp3');
    const kickHat = new Audio('sounds/Kick_n_Hat.mp3');
    const kick = new Audio('sounds/RP4_KICK_1.mp3');
    const closedHH = new Audio('soundns/ClosedHH.mp3');

    switch (event.key) {
      case 'q':
        actionDisplay.innerHTML = this.state.bank ? 'Chord 1' : 'Heater 1';
        heater1.play()
        break;
      case 'w':
        actionDisplay.innerHTML = this.state.bank ? 'Chord 2' : 'Heater 2';
        heater2.play()
        break;
      case 'e':
        actionDisplay.innerHTML = this.state.bank ? 'Chord 3' : 'Heater 3';
        heater3.play()
        break;
      case 'a':
        actionDisplay.innerHTML = this.state.bank ? 'Shaker' : 'Heater 4';
        heater4.play()
        break;
      case 's':
        actionDisplay.innerHTML = this.state.bank ? 'Open HH' : 'Clap';
        clap.play()
        break;
      case 'd':
        actionDisplay.innerHTML = this.state.bank ? 'Closed HH' : 'Open HH';
        openHH.play()
        break;
      case 'z':
        actionDisplay.innerHTML = this.state.bank ? 'Punchy Kick' : 'Kick  n\' Hat';
        kickHat.play()
        break;
      case 'x':
        actionDisplay.innerHTML = this.state.bank ? 'Side Stick' : 'Kick';
        kick.play()
        break;
      case 'c':
        actionDisplay.innerHTML = this.state.bank ? 'Snare' : 'Closed HH';
        closedHH.play()
        break;
      default:
        break;
    }
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
            <button onClick={this.handleclick} id={this.state.bank ? 'Snare' : 'Closed HH'} disabled={!this.state.power}>C</button>
          </div>
        </div>
        <div id='controls'>
          <div class="switch-cont">
            <h3>Power</h3>
            <input type='checkbox' id='power' class="check" value={this.state.power} onChange={this.handlePowerChange} checked={this.state.power}></input>
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
