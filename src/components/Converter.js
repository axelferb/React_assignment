/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Converter extends React.Component {

    state = {
        monetaryValue: [],
        lastUpdate: []
    }

    componentDidMount() {
        this.fetchConverter()
    }

    fetchConverter = () => {
        fetch('http://data.fixer.io/api/latest?access_key=43c73f19280ee6c7b68b065ee781a6e9&format=1')
            .then(response => response.json())
            .then((converter) => {
                this.setState({ monetaryValue: converter.rates.SEK })
                this.setState({ lastUpdate: converter.date })
            })
    }

    render() {
        return (
            <div className="col-md-3 converterDiv">
                <h2 className="centerAligned">Currency Converter</h2>
                <p className="centerAligned">1 EUR = <span className="underlined">{this.state.monetaryValue} SEK</span></p>
                <p className="centerAligned">Last updated: {this.state.lastUpdate}</p>
            </div>
        )
    }
}

export default Converter;