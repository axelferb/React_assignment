/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Weather extends React.Component {

    state = {
        city: '',
        desc: '',
        temp: '',
        cloud: ''
    }

    componentDidMount() {
        this.fetchConverter()
    }

    fetchConverter = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&lang=en&APPID=14cb918beacf21808d7ad879ed6129b0')
            .then(response => response.json())
            .then((weatherData) => {
                this.setState({ city: weatherData.name })
                this.setState({ desc: weatherData.weather[0].description })
                this.setState({ temp: weatherData.main.temp })
                this.setState({ cloud: weatherData.clouds.all })
            })
    }

    render() {
        return (
            <div className="col-md-6 weather">
                <h2 className="centerAligned">Current weather in {this.state.city}</h2>
                <hr />
                <p className="centerAligned bigText">{this.state.desc}</p>
                <br />
                <p className="centerAligned bigText">{this.state.temp}°c</p>
                <br />
                <p className="centerAligned bigText">{this.state.cloud}% clouds</p>
            </div>
        )
    }
}

export default Weather;