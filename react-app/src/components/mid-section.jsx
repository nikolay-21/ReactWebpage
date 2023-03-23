import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/images/video.png';
import './css/midsection-styles.css';
import topImg from './css/images/top-icon.png';
import midImg from './css/images/mid-icon.png';
import botImg from './css/images/bot-icon.png';

class MidSection extends Component {
    render() {
        return (
            <div className="midSection">               
                        
                    <div className='firstContainer'>

                        <img src={topImg} className='topDivIcon' alt="top-icon" />

                           <div className='firstdivText'>
                                <h4 className='topdivHeading'>
                                    <strong>Brief</strong>
                                </h4>

                                <p className='topdivP'>
                                    Complete <strong>brief writing or <br /> 
                                    simple guidance </strong> on what to <br /> 
                                    include, we've got you covered.
                                </p>
                            </div>

                    </div>

                    <div className='secondContainer'>

                        <img src={midImg} className='midDivIcon' alt="mid-icon" />

                           <div className='seconddivText'>
                                <h4 className='middivHeading'>
                                    <strong>Search</strong>
                                </h4>

                                <p className='middivP'>
                                    In-depth agency search covering; <br />
                                    <strong>criteria marching </strong>, door knocking <br />
                                    and due-dillagence vetting.
                                </p>
                            </div>

                    </div> 

                    <div className='thirdContainer'>

                        <img src={botImg} className='botDivIcon' alt="bot-icon" />

                           <div className='thirddivText'>
                                <h4 className='botdivHeading'>
                                    <strong>Pitch</strong>
                                </h4>

                                <p className='botdivP'>
                                    In-depth agency search covering; <br />
                                    <strong>criteria marching </strong>, door knocking <br />
                                    and due-dillagence vetting.
                                </p>
                            </div>

                    </div>


            </div>
        );
    }
}

export default MidSection;