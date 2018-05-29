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
            <div className="col-md-3">
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;