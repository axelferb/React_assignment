/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Timer extends React.Component {

    state = {
        value: '',
        timeSet: '',
        milliseconds: '',
    }

    handleInput(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        this.setState({ timeSet: this.state.value });
        this.msConverter();
        this.timerFunction();
    }

    msConverter = () => {
        this.setState({ milliseconds: this.state.timeSet * 1000 * 60 })
        console.log(this.state.milliseconds)
    }

    timerFunction = () => {
        setTimeout(() => { alert("kuken") }, this.state.milliseconds);
    }

    componentDidMount() {
        this.msConverter();
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className="col-md-9">
                <input value={this.state.value} onChange={this.handleInput.bind(this)} placeholder="Minutes" type="number" name="time"></input>
                <button onClick={this.handleSubmit.bind(this)} type="submit">Start timer!</button>
                <h1>Sekunder kvar: {this.state.milliseconds / 1000}</h1>
            </div>
        )
    }
}

export default Timer;