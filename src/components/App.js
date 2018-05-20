/* eslint-disable no-unused-vars */
import React from 'react';
import Container from './Container';
import Converter from './Converter';
import Timer from './Timer';
import Clock from './Clock';
import '../App.css';

class App extends React.Component {
    render() {
        return (
            <Container>
                <Converter />
                <Timer />
                <Clock />
            </Container >
        )
    }
}

export default App;
