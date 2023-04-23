import React from 'react';
import Progress from './Progress/Progress'

function GradeResult({ score }) {
	return (
		<div>
			The score is: {score}
			<Progress score={score} />
		</div>
	)
}

export default GradeResult;