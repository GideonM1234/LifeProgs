import React from 'react'
import Nav from '../Nav/Nav'
import './product.css'
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

	import {manufacturingMachines, chemicalIndustrialMachines, pharmaceuticalEquipments} from '../../src/Lists/Homelist'
function Product() {
  return (
		<section>
			<Nav />
			<br />
			<br />
			<section className="Prod-Section">
				<div className="product-Hero-sec">
					<div data-aos="fade-up" data-aos-duration="1000">
						<h1>Products</h1>
						<p data-aos="fade-up" data-aos-duration="1300">
							At <b style={{ color: "green" }}>LifeProt</b>, we
							deliver high-performance safety and protection
							products designed to keep you secure in any
							environment. With cutting-edge technology and
							uncompromising quality, our solutions ensure
							reliability when it matters most.
						</p>
					</div>
				</div>

				<section data-aos="fade-up" data-aos-duration="1100">
					<h2 className="product-section-h2">
						Manufacturing Machines
					</h2>
					<div className="products-contianers">
						{manufacturingMachines.map((manufacture) => (
							<fieldset className="product-fieldset">
								<Link
									to={`/ManufacturingMachine/${manufacture.id}`}
								>
									<img  src={manufacture.pic} alt="" />
								</Link>
								<br />
								<Link
									to={`/ManufacturingMachine/${manufacture.id}`}
									style={{ textDecoration: "none" }}
								>
									<p>{manufacture.details}</p>
								</Link>
							</fieldset>
						))}
					</div>
				</section><br /><br />
				<section data-aos="fade-up" data-aos-duration="1400">
					<h2 className="product-section-h2">
						Chemical Industrial Machines
					</h2>
					<div className="products-contianers">
						{chemicalIndustrialMachines.map((chem) => (
							<fieldset className="product-fieldset">
								<Link to={`/ChemicalMachine/${chem.id}`}>
									<img src={chem.pic} alt="" />
								</Link>
								<br />
								<Link
									to={`/ChemicalMachine/${chem.id}`}
									style={{ textDecoration: "none" }}
								>
									<p>{chem.details}</p>
								</Link>
							</fieldset>
						))}
					</div>
				</section>
				<br />
				<br />
				<section data-aos="fade-up" data-aos-duration="1200">
					<h2 className="product-section-h2">
						Pharmaceutical Equipments
					</h2>
					<div className="products-contianers">
						{pharmaceuticalEquipments.map((pharm) => (
							<fieldset className="product-fieldset">
								<Link to={`/PhamaceticalMachine/${pharm.id}`}>
									<img src={pharm.pic} alt="" />
								</Link>
								<br />
								<Link
									to={`/PhamaceticalMachine/${pharm.id}`}
									style={{ textDecoration: "none" }}
								>
									<p>{pharm.details}</p>
								</Link>
							</fieldset>
						))}
					</div>
				</section>
			</section>

			<Footer />
		</section>
  );
}

export default Product;