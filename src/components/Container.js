/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';

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
    children: PropTypes.object,
    children: PropTypes.array
}

export default Container;
