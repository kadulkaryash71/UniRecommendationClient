import React, { useEffect, useState } from 'react';

import MaterialCard from '../components/MaterialCard';
import HorizontalCard from '../components/HorizontalCard';
import ContactCard from '../components/ContactCard';


import '../components/Features/Features.css'

import Button from '@mui/material/Button';
import Input from "@mui/material/Input";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},

	marginLeft: 0,
	width: '100%',
	border: "1px solid blue",
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));


function Community() {

	const [people, setPeople] = useState([]);

	const [postInput, setPostInput] = useState({
		userToken: "yashDummy101",
		caption: "",
		file: ""
	});
	const [posts, setPosts] = useState([]);

	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	function handleChange(e) {
		setPostInput(prevInput => (
			{ ...prevInput, [e.target.name]: e.target.value }
		))
	}

	function handlePostSubmit(e) {
		e.preventDefault();
		console.log(postInput);

		fetch("http://localhost:5001/community/post", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(postInput),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(
			console.log("Your post has been submitted!")
		)
			.then(setPostInput({
				userToken: "yashDummy101",
				caption: "",
				file: ""
			}))
			.catch(e => console.log("Some error occurred:", e));
	}

	useEffect(() => {
		fetch("http://localhost:5001/community/posts")
			.then(data => data.json())
			.then(setPosts)
	}, [posts]);

	useEffect(() => {
		fetch("http://localhost:5001/community/people")
			.then(data => data.json())
			.then(setPeople)


		// return () => {
		// 	second
		// }
	}, [])

	useEffect(() => {
		if (searchInput.length >= 2) {
			fetch(`http://localhost:5001/community/${searchInput}`)
				.then(data => data.json())
				.then(setSearchResults)
		}
		console.log(searchResults);
	}, [searchInput]);


	return (
		<div className="container-fluid">
			<div className="row">
				<h1 className="h1 m-4 text-primary font-weight-bold">
					URPG-POD
				</h1>
			</div>
			<div className="row my-4">
				<div className="col-lg-2">
					<Search
						onChange={e => setSearchInput(e.target.value)}
						value={searchInput}
					>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>

					{searchResults !== undefined ?
						searchResults.map(result => (
							<div className="bg-dark my-2 text-white border-4 rounded p-1">
								<HorizontalCard heading={result.userToken} desc={result.caption} />
							</div>))
						: null
					}
				</div>
				<div className="col-lg-6 border-md-1 border-left border-right">
					{/* Playground */}
					<div className="d-flex flex-column m-3">
						<form
							onSubmit={handlePostSubmit}
							className="d-flex flex-column"
						>
							<TextField
								onChange={handleChange}
								value={postInput.caption}
								name="caption"
								multiline
								placeholder="Share your thoughts..."
							/>
							<Input
								color="primary"
								name="image"
								type="file"
								variant="filled"
								onChange={e => {
									var reader = new FileReader();
									reader.readAsDataURL(e.target.files[0]);
									reader.onload = () => {
										setPostInput(prevInput => (
											{ ...prevInput, "file": reader.result }
										))
									}
								}}
							/>
							<div className="row mx-3 justify-content-end">
								<Button variant="contained" type="submit" sx={{ width: "max-content" }}>Post</Button>
							</div>
						</form>

						{/* Content start */}

						{/* <div className="row m-3 justify-content-center">
							<MaterialCard username="yash@123" datePublished="28 February, 2023" caption="Finally landed. Bon voyage to an adventure." media="https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div>
						<div className="row m-3 justify-content-center">
							<MaterialCard username="yash@123" datePublished="28 February, 2023" caption="Finally landed. Bon voyage to an adventure." media="https://images.pexels.com/photos/3223423/pexels-photo-3223423.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div>
						<div className="row m-3 justify-content-center">
							<MaterialCard username="yash@123" datePublished="28 February, 2023" caption="Finally landed. Bon voyage to an adventure." media="https://images.pexels.com/photos/1002175/pexels-photo-1002175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						</div> */}
						{posts.map((post) => {
							return <div key={post._id} className="row m-3 justify-content-center">
								<MaterialCard username={post.userToken} datePublished={post.postedAt} caption={post.caption} media={post.file} />
							</div>
						})}
						{/* Content end */}

					</div>
				</div>
				<div className="col-lg-4">
					<div className="row text-left m-3">
						<Typography variant="h4" component="h4" color="primary" mx={1}>Recent Blogs</Typography>
						{/* Blog starts */}
						<div className="service-section col-12 p-0">
							<HorizontalCard iconIndex={1} heading="I recently discovered that US..." desc="According to our trusted sources..." />
						</div>
						<div className="service-section col-12 p-0">
							<HorizontalCard iconIndex={2} heading="I recently discovered that US..." desc="According to our trusted sources..." />
						</div>
						<div className="service-section col-12 p-0">
							<HorizontalCard iconIndex={3} heading="I recently discovered that US..." desc="According to our trusted sources..." />
						</div>
						{/* Blog Ends */}

					</div>
					<hr />
					<div className="row text-left justify-content-center m-3 bg-light rounded-pill">
						<div className="col-12 font-weight-bold text-danger h4">Similar people</div>
						{people.map(person => (
							<div className="col-sm-4 col-md-12 my-2">
								<ContactCard
									key={person._id}
									contactImage={person.image}
									username={person.username}
									fullName={person.fullName}
									university={person.university}
									city={person.city}
								/>
							</div>
						))}
					</div>
					<Button fullWidth>+ Show more people</Button>
				</div>
			</div>
		</div>
	)
}

export default Community