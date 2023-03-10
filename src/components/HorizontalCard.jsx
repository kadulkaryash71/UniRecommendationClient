import React from 'react';
import { AddCircle, AirplaneTicket, School, Engineering, BorderColor, Quiz } from '@mui/icons-material'

function HorizontalCard(props) {

    const iconsList = [<School />, <Engineering />, <Quiz />, <BorderColor />, <AirplaneTicket />]

    return (
        <div className="col-md-6 col-lg-6 col-12">
            <div className="icon-box">
                <i className="service-icon">{iconsList[props.iconIndex]}</i>
                <p className="service-title"><a href={props.link}>{props.heading}</a></p>
                <p className="service-para">{props.desc}</p>
            </div>
        </div>
    )
}

export default HorizontalCard;