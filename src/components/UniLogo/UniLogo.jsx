import React from 'react';
import './UniLogo.css';

function UniLogo(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 m-2">
            <div className="d-flex justify-content-center imageWrapper p-3">
                <img className="img-fluid" src={props.imageAddr} alt="" />
            </div>
        </div>
    )
}

export default UniLogo