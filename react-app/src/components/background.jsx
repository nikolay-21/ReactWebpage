import React, { Component } from 'react';
import Background from './css/images/background.png';
import './css/background-styles.css';

class BackgroundImg extends Component {
    render() { 
        return (
            <div>

                <img src={Background} className='backgroundImg' alt='bgrnd-img' />

            </div>
        );
    }
}
 
export default BackgroundImg;
