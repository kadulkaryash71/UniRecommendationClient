import React from 'react';
import Counsellors from "../pages/Counsellors";

function PredictResult({ prediction }) {
    return (
        <div className="container-fluid p-0">
            <div className={"p-5 text-white" + prediction[0] === "C" ? "p-5 text-white bg-success" : "p-5 text-white bg-danger"}>
                <h2>{prediction}</h2>
            </div>
            <Counsellors />

            {/* Google Maps API for dsiplaying nearest counsellors */}
            
        </div>

    )
}

export default PredictResult