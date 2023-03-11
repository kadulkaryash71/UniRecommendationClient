import React from 'react'
import reactLogo from './assets/react.svg'

import Navbar from './components/Navbar';
import NavbarTheme from './themes/NavbarTheme';
import Hero from './components/Hero/Hero';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Features from './components/Features/Features';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recommend from "./pages/Recommend";
import Grading from "./pages/Grading";
import Practice from "./pages/Practice";
import Community from "./pages/Community";
import Predict from "./pages/Predict";
import Counsellors from "./pages/Counsellors";

import { ThemeProvider } from '@mui/material/styles';
import './App.css'

function Home() {
	return (
		<>
			<Hero />
			<Jumbotron heading="Our Goals" text="We help you understand your abilities and profile. Take a step to reach your dream instituiton now!" moreInfo="" />
			<Features />
			<Partners />
			<Testimonials />
		</>
	)
}

function App() {
	return <>
		<ThemeProvider theme={NavbarTheme}>
			<Navbar />
		</ThemeProvider>

		{/* Routers */}
		<BrowserRouter >
			<Routes>
				<Route exact index path="/" element={<Home />} />
				<Route exact path="/recommend" element={<Recommend />} />
				<Route exact path="/grading" element={<Grading />} />
				<Route exact path="/community" element={<Community />} />
				<Route exact path="/tests" element={<Practice />} />
				<Route exact path="/chances" element={<Predict />} />
				<Route exact path="/counsel" element={<Counsellors />} />
				<Route path="/*" element={<Jumbotron heading="404 Page Not Found" text="Apparently, the page you are looking for does not exist. Please check your url and try again." />} />
			</Routes>
		</BrowserRouter>
		{/* <div className="chatbot">Floating Chatbot</div> */}
		<Footer />
	</>
}

export default App
