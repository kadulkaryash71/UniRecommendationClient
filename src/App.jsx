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

import { ThemeProvider } from '@mui/material/styles';
import './App.css'

function App() {
	return <>
		<ThemeProvider theme={NavbarTheme}>
			<Navbar />
		</ThemeProvider>
		<Hero />
		<Jumbotron heading="Our Goals" text="We help you understand your abilities and profile. Take a step to reach your dream instituiton now!" moreInfo="" />
		<Features />
		<Partners />
		<Testimonials />

		{/* <div className="chatbot">Floating Chatbot</div> */}

		<Footer />

	</>
}

export default App
