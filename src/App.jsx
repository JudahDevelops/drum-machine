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

    this.audio = {
      heater1: new Audio('src/sounds/Heater-1.mp3'),
      heater2: new Audio('src/sounds/Heater-2.mp3'),
      heater3: new Audio('src/sounds/Heater-3.mp3'),
      heater4: new Audio('src/sounds/Heater-4_1.mp3'),
      clap: new Audio('src/sounds/Clap.mp3'),
      openHH: new Audio('src/sounds/OpenHH.mp3'),
      kickHat: new Audio('src/sounds/Kick_n_Hat.mp3'),
      kick: new Audio('src/sounds/RP4_KICK_1.mp3'),
      closedHH: new Audio('src/sounds/ClosedHH.mp3')
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleVolumeChange = (event) => {
    this.setState({
      volume: event.target.value
    })

    const actionDisplay = document.getElementById('action-display');
    actionDisplay.innerHTML = `Volume: ${event.target.value}`;

    Object.keys(this.audio).forEach(key => {
      this.audio[key].volume = event.target.value / 100;
    })
    
    setTimeout(() => {
      actionDisplay.innerHTML = '';
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

    switch(event.target.id) {
      case 'q':
        this.audio.heater1.currentTime = 0;
        this.audio.heater1.play();
        break;
      case 'w':
        this.audio.heater2.currentTime = 0;
        this.audio.heater2.play();
        break;
      case 'e':
        this.audio.heater3.currentTime = 0;
        this.audio.heater3.play();
        break;
      case 'a':
        this.audio.heater4.currentTime = 0;
        this.audio.heater4.play();
        break;
      case 's': 
        this.audio.clap.currentTime = 0;
        this.audio.clap.play();
        break;
      case 'd':
        this.audio.openHH.currentTime = 0;
        this.audio.openHH.play();
        break;
      case 'z':
        this.audio.kickHat.currentTime = 0;
        this.audio.kickHat.play();
        break;
      case 'x':
        this.audio.kick.currentTime = 0;
        this.audio.kick.play();
        break;
      case 'c':
        this.audio.closedHH.currentTime = 0;
        this.audio.closedHH.play();
        break;
      default:
        break;
    }

    const actionDisplay = document.getElementById('action-display');
    actionDisplay.innerHTML = event.target.value;
  }

  handleKeyDown = (event) => {
    const actionDisplay = document.getElementById('action-display');

    if (this.state.power) {
      switch (event.key) {
        case 'q':
          actionDisplay.innerHTML = this.state.bank ? 'Chord 1' : 'Heater 1';
          this.audio.heater1.currentTime = 0;
          this.audio.heater1.play();
          break;
        case 'w':
          actionDisplay.innerHTML = this.state.bank ? 'Chord 2' : 'Heater 2';
          this.audio.heater2.currentTime = 0;
          this.audio.heater2.play();
          break;
        case 'e':
          actionDisplay.innerHTML = this.state.bank ? 'Chord 3' : 'Heater 3';
          this.audio.heater3.currentTime = 0;
          this.audio.heater3.play();
          break;
        case 'a':
          actionDisplay.innerHTML = this.state.bank ? 'Shaker' : 'Heater 4';
          this.audio.heater4.currentTime = 0;
          this.audio.heater4.play();
          break;
        case 's':
          actionDisplay.innerHTML = this.state.bank ? 'Open HH' : 'Clap';
          this.audio.clap.currentTime = 0;
          this.audio.clap.play();
          break;
        case 'd':
          actionDisplay.innerHTML = this.state.bank ? 'Closed HH' : 'Open HH';
          this.audio.openHH.currentTime = 0;
          this.audio.openHH.play();
          break;
        case 'z':
          actionDisplay.innerHTML = this.state.bank ? 'Punchy Kick' : 'Kick  n\' Hat';
          this.audio.kickHat.currentTime = 0;
          this.audio.kickHat.play();
          break;
        case 'x':
          actionDisplay.innerHTML = this.state.bank ? 'Side Stick' : 'Kick';
          this.audio.kick.currentTime = 0;
          this.audio.kick.play();
          break;
        case 'c':
          actionDisplay.innerHTML = this.state.bank ? 'Snare' : 'Closed HH';
          this.audio.closedHH.currentTime = 0;
          this.audio.closedHH.play();
          break;
        default:
          break;
      }
    }
  }
  




  render() {
    


    return (
      <div id="controls-container">
        <div id='buttons'>
          <div class='row'>
            <button onClick={this.handleclick} value={this.state.bank ? 'Chord 1' : 'Heater 1'} disabled={!this.state.power} id='q'>Q</button>
            <button onClick={this.handleclick} value={this.state.bank ? 'Chord 2' : 'Heater 2'} disabled={!this.state.power} id='w'>W</button>
            <button onClick={this.handleclick} value={this.state.bank ? 'Chord 3' : 'Heater 3'} disabled={!this.state.power} id='e'>E</button>
          </div>
          <div class='row'>
            <button onClick={this.handleclick} value={this.state.bank ? 'Shaker' : 'Heater 4'} disabled={!this.state.power} id='a'>A</button>
            <button onClick={this.handleclick} value={this.state.bank ? 'Open HH' : 'Clap'} disabled={!this.state.power} id='s'>S</button>
            <button onClick={this.handleclick} value={this.state.bank ? 'Closed HH' : 'Open HH'} disabled={!this.state.power} id='d'>D</button>
          </div>
          <div class='row'>
          <button onClick={this.handleclick} value={this.state.bank ? 'Punchy Kick' : "Kick n' Hat"} disabled={!this.state.power} id='z'>Z</button>
            <button onClick={this.handleclick} value={this.state.bank ? 'Side Stick' : 'Kick'} disabled={!this.state.power} id='x'>X</button>
            <button onClick={this.handleclick} value={this.state.bank ? 'Snare' : 'Closed HH'} disabled={!this.state.power} id='c'>C</button>
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
