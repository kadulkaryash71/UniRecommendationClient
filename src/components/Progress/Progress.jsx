import React, { useEffect } from 'react';
import "./Progress.css"

// Alternate progress bar (linear-gradient): https://codepen.io/Tomik23/pen/GRpMZBz
function Progress(props) {

    function css3RadialProgressBar() {
        var xvaluenow = props.score*10; //Insert here a specific number (0-100) and remove the comment this var, and the above code
        var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
        var progress = document.getElementById('progress');
        var progress_circle = document.getElementById('progress-circle');
        var progress_style = document.getElementById('progress-style');

        /* Fix: Cover gap with shadow */
        if (xvaluenow == 0) {
            var shadowfix = "0";
        }
        else {
            var shadowfix = "1px";
        }
        
        /* Inserting values */
        progress.innerHTML = xvaluenow + '%';
        progress_circle.setAttribute("aria-valuenow", xvaluenow);
        progress_style.innerHTML = " \
      .p-h:before, .p-f, .p-f:before{ \
      -moz-transform: " + rotatenum + "; \
      -webkit-transform: " + rotatenum + "; \
      -o-transform: " + rotatenum + "; \
      -ms-transform: " + rotatenum + "; \
      transform: " + rotatenum + "; \
      -webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
        box-shadow: 0 0 0 " + shadowfix + " #828282;}\
      \ ";
    }

    useEffect(css3RadialProgressBar, [props.score]);

    return (
        <>
            <div className="progress-container">
                <div id="progress-circle" className="progress-circle" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <span className="p-h"></span><span className="p-f"></span>
                    <span id="progress">{props.score}</span><span className="sr-only">Complete</span>
                </div>
            </div>
            <style id="progress-style"></style>
        </>
    )
}

export default Progress