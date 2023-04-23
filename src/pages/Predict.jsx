import React, { useState, useEffect } from 'react';
import PredictResult from "../components/PredictResult";

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