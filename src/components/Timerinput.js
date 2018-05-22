import React from 'react';

function TimerInput(props) {
    return (<input type="number" onChange={props.handleChange} name="time"></input>)
}

export default TimerInput;