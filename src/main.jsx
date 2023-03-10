import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recommend from "./pages/Recommend";
import Grading from "./pages/Grading";
import Practice from "./pages/Practice";
import Community from "./pages/Community";
import Predict from "./pages/Predict";
import Counsellors from "./pages/Counsellors";

import Jumbotron from './components/Jumbotron/Jumbotron';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Routers */}
		<BrowserRouter >
			<Routes>
				<Route exact index path="/" element={<App />} />
				<Route exact path="/recommend" element={<Recommend />} />
				<Route exact path="/grading" element={<Grading />} />
				<Route exact path="/community" element={<Community />} />
				<Route exact path="/tests" element={<Practice />} />		
        <Route exact path="/chances" element={<Predict />} />
        <Route exact path="/counsel" element={<Counsellors />} />
        <Route path="/*" element={<Jumbotron heading="404 Page Not Found" text="Apparently, the page you are looking for does not exist. Please check your url and try again." />} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>,
)
