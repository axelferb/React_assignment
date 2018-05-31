/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

function Container(props) {
    return (
        <section className="container">
            <div className="row">
                {props.children}
            </div>
        </section>
    )
}

Container.propTypes = {

}

export default Container;
