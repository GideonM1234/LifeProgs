import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Detailed_p from './Home/Detailed_p'
import About from './About/About'
import Service from './Services/Service'
import Product from './Product/Product'
import Contact from './Contact/Contact'
import ScrollToTop from './ScrollToTop'
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
		AOS.init();
  }, []);

  return (
		<>
		<ScrollToTop/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Machine/:id" element={<Detailed_p />} />
				<Route path="/About" element={<About />} />
				<Route path="/Products" element={<Product />} />
				<Route path="/Services" element={<Service />} />
				<Route path="/ContactUs" element={<Contact />} />
			</Routes>
		</>
  );
}

export default App;
