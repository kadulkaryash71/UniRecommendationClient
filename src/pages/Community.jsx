import React from 'react';

import Textbox from '../components/Textbox';
import MaterialCard from '../components/MaterialCard';
import HorizontalCard from '../components/HorizontalCard';

import '../components/Features/Features.css'

import Button from '@mui/material/Button';

function Community() {
	return (
		<div className="container-fluid">
			<div className="row">
				<h1 className="h1 m-4 text-primary font-weight-bold">
					URPG-POD
				</h1>
			</div>
			<div className="row my-4">
				<div className="col-lg-2">
					Activities
					(Search universities, courses, people)
				</div>
				<div className="col-lg-6 border-md-1 border-left border-right">
					{/* Playground */}
					<div className="container d-flex flex-column">
						<Textbox rows="5" cols="25" styleClasses="m-3 border-4 bg-white text-dark font-weight-semibold border-primary rounded" />
						<div className="row mx-3 justify-content-end">
							<Button variant="contained" sx={{ width: "max-content" }}>Post</Button>
						</div>

						{/* Content start */}
						<div className="row m-3 justify-content-center">
							<MaterialCard username="yash@123" datePublished="28 February, 2023" caption="Finally landed. Bon voyage to an adventure." media="https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div>
						<div className="row m-3 justify-content-center">
							<MaterialCard username="yash@123" datePublished="28 February, 2023" caption="Finally landed. Bon voyage to an adventure." media="https://images.pexels.com/photos/3223423/pexels-photo-3223423.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div>
						<div className="row m-3 justify-content-center">
							<MaterialCard username="yash@123" datePublished="28 February, 2023" caption="Finally landed. Bon voyage to an adventure." media="https://images.pexels.com/photos/1002175/pexels-photo-1002175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div>
						{/* Content end */}

					</div>
				</div>
				<div className="col-lg-4">
					<div className="row text-left m-3">

						{/* Blog starts */}
						<div className="col-12 border-2 border-dark rounded-end">
							<HorizontalCard iconIndex={1} heading="I recently discovered that US..." desc="According to our trusted sources..." />
						</div>
						<div className="col-12">
							<HorizontalCard iconIndex={1} heading="I recently discovered that US..." desc="According to our trusted sources..." />
						</div>
						<div className="col-12">
							<HorizontalCard iconIndex={1} heading="I recently discovered that US..." desc="According to our trusted sources..." />
						</div>
						{/* Blog Ends */}

					</div>
					<hr />
					<div className="row text-left m-3 bg-light rounded-pill">
						<div className="col-12 font-weight-bold text-danger h4">Similar people</div>
						<div className="col my-3">Card</div>
						<div className="col my-3">Card</div>
						<div className="col my-3">Card</div>
						<div className="col my-3">Card</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Community