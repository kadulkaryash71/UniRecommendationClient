import React from 'react';
import { AddCircle, AirplaneTicket, School, Engineering, BorderColor, Quiz, Diversity3 } from '@mui/icons-material';
// import Diversity3Icon from '@mui/icons-material/Diversity3';

function HorizontalCard(props) {

    const iconsList = [<School />, <Engineering />, <Quiz />, <BorderColor />, <AirplaneTicket />, <Diversity3 />]


    // props: heading, desc, link, iconIndex
    return (
        <div className="icon-box">
            <i className="service-icon">{iconsList[props.iconIndex]}</i>
            <p className="service-title"><a href={props.link}>{props.heading}</a></p>
            <p className="service-para">{props.desc}</p>
        </div>
    )
}

export default HorizontalCard;