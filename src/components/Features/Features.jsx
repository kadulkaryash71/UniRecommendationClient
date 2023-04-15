import React, { useState } from 'react';

import HorizontalCard from '../HorizontalCard';
import './Features.css';

function Features() {

    const featuresList = [
        {
            title: "University Recommendation",
            description: "Figuring your journey ahead? Pick a university that suits your personality and go make it big!",
            link: "/recommend"
        },
        {
            title: "Predicting Admit Chances",
            description: "A blend of university experts and our specialized AI model calculates the probability of you getting an admit in your dream university",
            link: "/chances"
        },
        {
            title: "Practice Tests",
            description: "Already on your way? We help you prepare for your entrance exams right away. Don't worry we're not here to \"mock\" you",
            link: "/tests"
        },
        {
            title: "SOP grading",
            description: "Our expert system is ready to grade your college essay. Aim higher by constructing a stronger essay.",
            link: "/grading"
        },
        {
            title: "Career Counselling",
            description: "Let's plan your journey together. Talk to the most experienced counsellors around you and watch the time turn in your favour.",
            link: "/counsel"
        },
        {
            title: "URPG-Pod",
            description: "Find blogs, articles and know your classmates before landing abroad.",
            link: "/community"
        },


    ];



    return (
        <section id="features" className="service-section px-5 py-5">
            <div className="container-fluid">
                <div className="row justify-content-center py-3">
                    <div className="col-md-8 col-12 text-center">
                        <p className="service-main-heading">Features</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {featuresList.map((feature, index) =>
                        <div className="col-md-6 col-lg-6 col-12">
                            <HorizontalCard key={index} iconIndex={index} heading={feature.title} desc={feature.description} link={feature.link} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Features;