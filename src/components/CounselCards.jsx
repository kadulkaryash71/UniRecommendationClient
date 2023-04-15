import React from 'react'

function CounselCards(props) {
    return (
        <div className="col-lg-4 col-md-6 cra p-2">
            <div className="card">
                <img className="card-img-top p-4" src={props.image} height="286" width="180" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.note}</p>
                        <a target="_blank" href="https://leapscholar.com/counsellors" className="btn btn-primary">Start your journey </a>
                    </div>
            </div>
        </div>
    )
}

export default CounselCards