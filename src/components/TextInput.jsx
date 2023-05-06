import React from 'react';

function TextInput(props) {
    return (
        <div className="mb-3">
            <label for="lor" className="form-label">LOR grade</label>
            <input type={props.type} step="any" min={props.min} max={props.max} className="form-control" name={props.fieldName} id="" aria-describedby="helpId" placeholder="" onChange={e => setFormData(prevData => { return { ...prevData, "lor": e.target.value } })} />
            {props.small &&
                <small id="helpId" className="form-text text-muted">
                    Don't know what grade your LOR has? Try <a href="/grading">Grade My LOR</a> to see if your LOR looks good to the Uni
                </small>
            }
        </div>
    )
}

export default TextInput