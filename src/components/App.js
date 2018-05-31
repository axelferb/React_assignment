/* eslint-disable no-unused-vars */
import React from 'react';
import Container from './Container';
import Converter from './Converter';
import Timer from './Timer';
import Clock from './Clock';
import Todo from './Todo';
import Weather from './Weather'
import '../App.css';

class App extends React.Component {
    render() {
        return (
            <Container>
                <Clock />
                <Converter />
                <Timer />
                <Weather />
                <Todo />
            </Container >
        )
    }
}

export default App;
