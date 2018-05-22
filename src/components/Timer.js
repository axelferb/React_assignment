/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Timer extends React.Component {

    state = {
        setTime: [0],
        milliseconds: [0],
        inputValue: [],
    }

    msConverter = () => {
        this.setState({ milliseconds: this.state.setTime / 60 / 1000 })
        console.log(this.state.setTime)
    }

    // setTimer = () => {
    //     setTimeout§§§§§§§
    // }

    onChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit() {
        this.setState({ setTime: this.state.inputValue });
    }

    componentDidMount() {
        this.msConverter()
    }

    render() {
        return (
            <div className="col-md-9">
                {/* <label htmlFor="time">Set timer minutes</label> */}
                <input value={this.state.inputValue} onChange={this.onChange} placeholder="Minutes" type="number" name="time"></input>
                <button onClick={this.handleSubmit} type="submit">Start timer!</button>
            </div >
        )
    }
}

export default Timer;