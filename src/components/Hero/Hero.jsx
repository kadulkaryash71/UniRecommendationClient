import React from 'react'

import { Grid, Box } from '@mui/material';
import { red, purple } from '@mui/material/colors';

import './Hero.css';
import Image from '../Image';
import heroVector from '../../assets/hero-vector.jpg';


function Hero() {
    return (
        
        <div className="hero container">
            <div className="row justify-content-center align-items-center text-white">
                <div className="col-lg-6 col-md-6 col-sm-12 bg-danger p-4 m-auto">
                    <div className="container">
                        <h1 className="landingTitle">URPG🚀 - University Recommendation for Post Gradutation</h1>
                        <p className="landingSubtitle">Ur Post Graduation abroad now our responsibility</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Image link={heroVector} title="Welcome Image" />
                </div>
            </div>
        </div>
    )
}

export default Hero;