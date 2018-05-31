/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Clock extends React.Component {

    state = {
        date: new Date(),
    }

    updateInterval() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.clockUpdate = setInterval(
            () => this.updateInterval(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.clockUpdate);
    }

    render() {
        return (
            <div className="col-md-12 centerAligned clock">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock;