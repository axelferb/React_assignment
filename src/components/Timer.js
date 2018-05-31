/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Timer extends React.Component {

    state = {
        timerStartStop: '',
        timeSet: '',
        timerClass: 'col-md-6 centerAligned timer',
        timerMessage1: 'The timer is currently set to ',
        timerMessage2: ' minute(s)'
    }

    handleInput = (event) => {
        this.setState({
            timeSet: event.target.value * 1000 * 60
        })
    }

    handleStart = () => {
        this.startTimer();
        this.setState({
            timerClass: 'col-md-6 centerAligned timer',
            timerMessage1: 'The timer is currently set to ',
            timerMessage2: ' minute(s)'
        })
    }

    startTimer() {
        this.setState({
            timerStartStop:
                setTimeout(() => {
                    this.setState({
                        timerClass: 'col-md-6 centerAligned timerDone',
                        timerMessage1: 'The timer you set to ',
                        timerMessage2: ' minute(s) is now completed'
                    })
                },
                    this.state.timeSet)
        })
    }

    resetTimer() {
        window.clearTimeout(this.state.timerStartStop)
        this.setState({
            timerClass: 'col-md-6 centerAligned timerDone',
            timerMessage1: 'The timer you set to ',
            timerMessage2: ' minute(s) is now reset'
        })
    }

    render() {
        return (
            <div className={this.state.timerClass}>
                <div className="input-group mb-3">
                    <input className="form-control" value={this.state.value} onChange={this.handleInput.bind(this)} placeholder="Minutes" type="number" name="time"></input>
                    <div className="input-group-append">
                        <button className="btn-success btn" onClick={this.handleStart.bind(this)}>Start</button>
                        <button className="btn-warning btn" onClick={this.resetTimer.bind(this)}>Reset</button>
                    </div>
                </div>
                <p className="timerText">{this.state.timerMessage1} {this.state.timeSet / 1000 / 60}  {this.state.timerMessage2}</p>
            </ div >
        )
    }
}

export default Timer;