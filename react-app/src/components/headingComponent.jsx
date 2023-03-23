import React, { Component } from 'react';
import './css/heading-styles.css';
import 'bootstrap/dist/css/bootstrap.css';

class Heading extends Component {
    render() {
        return (
            <div className="headingSection">
                
                <h1 className="topHeading"><strong>Managed agency selection</strong></h1>
                <h5 className="underHeading">Strengthen your onboarding process</h5>

            </div>
        );
    }
}

export default Heading;