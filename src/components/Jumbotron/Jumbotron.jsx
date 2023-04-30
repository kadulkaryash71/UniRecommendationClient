import React from 'react';

import "./Jumbotron.css";

import { yellow } from '@mui/material/colors';

// props: heading, text[, moreinfo]
function Jumbotron(props) {
	return (
		<div className="jumbotron" sx={{ bgcolor: yellow[100] }}>
			<h1 className="heading display-4">{props.heading}</h1>
			<p className="lead">{props.text}</p>
			{props.moreInfo
				&&
				<>
					<hr className="my-4" />
					<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
					<p className="lead">
						<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
					</p>
				</>
			}
		</div>
	)
}

export default Jumbotron