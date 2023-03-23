import React, { Component } from 'react';
import Heading from './headingComponent.jsx';
import MidSection from './mid-section.jsx';
import BackgroundImg from './background.jsx';
import MidImg from './midimg.jsx';

class MainSection extends Component {

    render() { 
        return (
            <div>
                <Heading/>
                <MidImg/>
                <MidSection/>
                <BackgroundImg/>

            </div>
        );
    }
}
 
export default MainSection;