import React, { useState } from 'react';
import { TextField, Button, FormLabel } from "@mui/material";

import GradeResult from '../components/GradeResult';

function Grading() {

	const [doc, setDoc] = useState("")
	const [grade, setGrade] = useState(null)
	function handleSubmit(e) {
		e.preventDefault();

		// POST: document data to backend for NLP
		// Receive a grade and analysis of the possible flaws in the text.
		// A good essay will be composed of... <depends on the final dataset used>
		fetch("http://127.0.0.1:5000/grading", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ document: doc })
		}).then(
			data => data.json()
		).then(
			data => setGrade(data.result)
		).catch(e => console.error("Something went wrong: ", e))
	}

	return (
		<form className="m-4">
			<FormLabel>The first step to self-evaluation of your college essay will be getting an estimate grade to check its quality</FormLabel>

			{/* Essay input starts */}
			{/* RTF for document loading seems like a better option */}
			{/* Priority: Uploading documents to extract college essay */}
			<TextField
				multiline
				value={doc}
				onChange={e => setDoc(e.target.value)}
				fullWidth
				sx={{ marginBottom: "1em" }}
			/>
			{/* Essay input ends */}

			<Button variant="contained" fullWidth onClick={handleSubmit}>Check</Button>

			{grade && <GradeResult score={grade} />}

		</form>
	)
}

export default Grading