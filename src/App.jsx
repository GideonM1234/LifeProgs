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
import Detialedp1 from './DDPage/Detialedp1'
import Detailp2 from './DDPage/Detailp2'
import Detial3 from './DDPage/Detial3'

function App() {
  useEffect(() => {
		AOS.init();
  }, []);

  return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/Machine/:id" element={<Detailed_p />} />
				<Route path="/About" element={<About />} />
				<Route path="/" element={<Product />} />
				<Route path="/Services" element={<Service />} />
				<Route path="/ContactUs" element={<Contact />} />
				<Route path="/PhamaceticalMachine/:id" element={<Detial3 />} />
				<Route path="/ChemicalMachine/:id" element={<Detailp2 />} />
				<Route path="/ManufacturingMachine/:id" element={<Detialedp1 />} />
			</Routes>
		</>
  );
}

export default App;
