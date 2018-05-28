/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Timer extends React.Component {

    state = {
        timeSet: '',
        milliseconds: '',
    }

    handleInput = (event) => {
        this.setState({
            timeSet: event.target.value,
        })
    }

    msConvert = () => {
        this.setState({
            milliseconds: this.state.timeSet * 1000 * 60
        })
    }

    updateValue = () => {
        console.log(this.state.timeSet)
        console.log(this.state.milliseconds)
    }

    handleSubmit = () => {
        this.updateValue();
        this.msConvert();
        this.startTimer();
    }

    startTimer = () => {
        setTimeout(() => { alert("DING") }, this.state.milliseconds);
    }

    render() {
        return (
            <div className="col-md-9">
                <input value={this.state.value} onChange={this.handleInput.bind(this)} placeholder="Minutes" type="number" name="time"></input>
                <button onClick={this.handleSubmit.bind(this)}>Update</button>
                {/* <button onClick={this.handleSubmit.bind(this)} type="submit">Start timer!</button> */}
                {/* <h1>Sekunder kvar: {this.state.milliseconds / 1000}</h1> */}
            </div>
        )
    }
}

export default Timer;