import React, { useState, useEffect } from 'react';
import PredictResult from "./PredictResult";

import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { RadioGroup, Radio, FormControlLabel, FormLabel } from "@mui/material";

function Predict() {
    const [result, setResult] = useState("");
    const [unisList, setUnisList] = useState([]);
    const [isDataLoaded, setDataLoaded] = useState(false);
    const [formData, setFormData] = useState(
        {
            gre: "0",
            englishTest: "0",
            englishScore: "0",
            universityCode: "0",
            intake: "00000"
        }
    );

    useEffect(() => {
        loadUniversities()
    }, [isDataLoaded])

    function loadUniversities() {
        fetch("http://127.0.0.1:5000/data/unis")
            .then(data => data.json())
            .then(data => data["universities"])
            .then(data => setUnisList(data))
            .catch(e => console.log("Something went wrong: ", e))
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        console.log(formData);

        // validate formData before POST request

        fetch('http://127.0.0.1:5000/chances', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(data => data.json())
            .then(data => setResult(data["prediction"]));

        console.log("Submitted");
    }

    return (
        <main className="text-left">
            {!result ?
                <form className="m-5" noValidate>
                    {/* <div class="mb-3">
                        <label for="" class="form-label" autoFocus>GRE Score</label>
                        <input type="number" min="0" max="340" class="form-control" name="gre" id="" aria-describedby="helpId" placeholder="" onChange={e => setFormData(prevData => {return {...prevData, "gre": e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">TOEFL Score</label>
                        <input type="number" min="0" max="120" class="form-control" name="toefl" id="" aria-describedby="helpId" placeholder="" onChange={e => setFormData(prevData => {return {...prevData, "english": e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">University Rating (Scale: 0-5)</label>
                        <input type="number" min="0" max="5" class="form-control" name="rating" id="" aria-describedby="helpId" placeholder="" onChange={e => setFormData(prevData => {return {...prevData, "rating": e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">LOR grade</label>
                        <input type="number" step="any" min="0" max="5" class="form-control" name="lor" id="" aria-describedby="helpId" placeholder="" onChange={e => setFormData(prevData => {return {...prevData, "lor": e.target.value}})} />
                        <small id="helpId" class="form-text text-muted">
                            Don't know what grade your LOR has? Try <a href="/grading">Grade My LOR</a> to see if your LOR looks good to the Uni
                        </small>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">SOP grade</label>
                        <input type="number" step="any" min="0" max="5" class="form-control" name="sop" id="" aria-describedby="helpId" placeholder="" onChange={e => setFormData(prevData => {return {...prevData, "sop": e.target.value}})} />
                        <small id="helpId" class="form-text text-muted">
                            Don't know what grade your LOR has? Try <a href="/grading">Grade My SOP</a> to see if your LOR looks good to the Uni
                        </small>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">CGPA (scale: 10)</label>
                        <input type="number" step="any" min="0" max="10" class="form-control" name="cgpa" id="" aria-describedby="helpId" placeholder="" onChange={e => setFormData(prevData => {return {...prevData, "cgpa": e.target.value}})} />
                    </div>
                    <div class="mb-3" onChange={e => setFormData(prevData => {return {...prevData, "exp": e.target.value}})}>
                        <label for="exp" class="form-label">Do you have research/work experience?</label>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exp" id="yes" value="1" />
                            <label class="form-check-label" for="yes">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exp" id="no" value="0" />
                            <label class="form-check-label" for="no">No</label>
                        </div>
                    </div> */}

                    <div className="container d-flex flex-column" onClick={() => setDataLoaded(true)}>
                        <h2 className="display-5 text-center">
                            We will require some of your preliminary information for predicting your chances
                        </h2>
                        <TextField
                            variant="outlined"
                            type="number"
                            label="GRE Score"
                            helperText="Must be between 0 and 340"
                            sx={{ marginTop: "1em" }}
                            value={formData["gre"]}
                            onChange={e => setFormData(prevData => { return { ...prevData, "gre": e.target.value } })}
                            required
                            error={formData.gre < 0 || formData.gre > 340}
                        />
                        <div className="row align-items-end mt-3">
                            <div className="col-6">
                                <FormControl fullWidth>
                                    <InputLabel id="e-test">English Test</InputLabel>
                                    <Select
                                        labelId="e-test"
                                        label="Test"
                                        value={formData.englishTest}
                                        onChange={e => setFormData(prevData => { return { ...prevData, "englishTest": e.target.value } })}
                                    >
                                        <MenuItem value={0}>IELTS</MenuItem>
                                        <MenuItem value={1}>TOEFL</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-6">
                                <Input
                                    type="number"
                                    variant="filled"
                                    placeholder="English Test Score"
                                    inputProps={{ min: 0, max: formData.englishTest === 1 ? 9 : 120 }}
                                    value={formData["english"]}
                                    onChange={e => setFormData(prevData => { return { ...prevData, "englishScore": e.target.value } })}
                                    required
                                    fullWidth
                                />
                            </div>
                        </div>
                        <FormControl fullWidth>
                            <InputLabel id="universityName" helperText="Type any keyword from the university name to find it quickly">University Name</InputLabel>
                            <Select
                                sx={{ marginTop: "1em" }}
                                labelId="universityName"
                                label="universityCode"
                                value={formData.universityCode}
                                onChange={e => setFormData(prevData => { return { ...prevData, "universityCode": e.target.value } })}
                            >
                                {/* Map colleges to the university code */}
                                {isDataLoaded && unisList.map((uni, index) =>
                                    <MenuItem key={index} value={index}>{uni}</MenuItem>
                                )}
                            </Select>
                        </FormControl>

                        {/* Radio Group */}
                        <FormControl sx={{ marginTop: "1em", marginBottom: "1em" }}>
                            <FormLabel id="intake">Which intake are you planning for?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="intake"
                                name="intake"
                                value={formData.intake}
                                onChange={e => setFormData(prevData => { return { ...prevData, "intake": e.target.value } })}
                            >
                                <FormControlLabel value="10000" control={<Radio />} label="Fall" />
                                <FormControlLabel value="00100" control={<Radio />} label="Spring" />
                                <FormControlLabel value="00010" control={<Radio />} label="Summer" />
                                <FormControlLabel value="00001" control={<Radio />} label="Winter" />
                                <FormControlLabel value="01000" control={<Radio />} label="Any" />
                            </RadioGroup>
                        </FormControl>

                        <Button fullWidth variant="contained" onClick={handleFormSubmit}>Submit</Button>
                    </div>
                </form>


                : <PredictResult prediction={result} />
            }
        </main>

    )
}

export default Predict