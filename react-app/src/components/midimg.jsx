import React, { Component } from 'react';
import './css/midimg-styles.css';
import MainImg from './css/images/video.png';

class MidImg extends Component {
    render() { 
        return (
            <div>

                <img src={MainImg} className='mainImg' alt='main-img' />

            </div>
        );
    }
}
 
export default MidImg;
