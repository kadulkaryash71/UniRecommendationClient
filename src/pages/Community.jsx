import React, { useEffect, useState } from 'react';

import Textbox from '../components/Textbox';
import MaterialCard from '../components/MaterialCard';
import HorizontalCard from '../components/HorizontalCard';

import '../components/Features/Features.css'

import Button from '@mui/material/Button';
import Input from "@mui/material/Input";

function Community() {

	const [postInput, setPostInput] = useState({
		userToken: "yashDummy101",
		caption: "",
		mediaLink: ""
	});
	const [posts, setPosts] = useState([]);

	function handlePostSubmit(e) {
		e.preventDefault();

		fetch("http://localhost:5000/community/post", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(postInput)
		}).then(
			console.log("Your post has been submitted!")
		).catch(e => console.log("Some error occurred:", e));


	}

	useEffect(() => {
		fetch("http://localhost:5000/community/posts")
			.then(data => data.json())
			.then(setPosts)
	}, [window.onload])

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
					<div className="d-flex flex-column m-3">
						<form className="d-flex flex-column" onSubmit={handlePostSubmit} action="http://localhost:5000/community/post" method="post">
							<Textbox
								onChange={e => setPostInput( prevInput => { return  {...prevInput, "caption": e.target.value} })}
								value={postInput.caption}
								rows="5"
								cols="30"
								styleClasses="border-4 bg-white text-dark font-weight-semibold border-primary rounded"
							/>
							<Input color="primary" type="file" variant="filled" />
							<div className="row mx-3 justify-content-end">
								<Button variant="contained" type="submit" sx={{ width: "max-content" }}>Post</Button>
							</div>
						</form>

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
						{posts.map((post, index) => {
							return <div key={index} className="row m-3 justify-content-center">
								<MaterialCard username={post.userToken} datePublished={post.postedAt} caption={post.caption} media={post.mediaLink} />
							</div>
						})}
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