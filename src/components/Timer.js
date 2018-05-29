/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Timer extends React.Component {

    state = {
        timeSet: '',
    }

    handleInput = (event) => {
        this.setState({
            timeSet: event.target.value * 1000 * 60
        })
    }

    handleStart = () => {
        this.startTimer();
    }

    startTimer() {
        setTimeout(() => { alert(this.state.timeSet / 1000 / 60 + " minute(s) have now passed") }, this.state.timeSet);
        console.log(this.state.timeSet)
    }

    render() {
        return (
            <div className="col-md-9">
                <input value={this.state.value} onChange={this.handleInput.bind(this)} placeholder="Minutes" type="number" name="time"></input>
                <button onClick={this.handleStart.bind(this)}>Update</button>
                <p>The timer is currently set to {this.state.timeSet / 1000 / 60} minute(s) </p>
            </div>
        )
    }
}

export default Timer;