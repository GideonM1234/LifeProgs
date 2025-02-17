import React from "react";
import Nav from "../Nav/Nav";
import "./home.css";
import { Link } from "react-router-dom";
import { pharmaceuticalEquipments } from "../Lists/Homelist";
import inq from '../assets/img/inq.png';
import solution from '../assets/img/75293.jpg'
import order from '../assets/img/ord.jpg'
import testing from '../assets/img/12121212.jpg'
import shipping from '../assets/img/1024.jpg'
import install from '../assets/img/612-1.jpg'
import Footer from "../Footer/Footer";
function Home() {



	return (
		<section>
			<Nav />
			<section className="Home-Sec">
				<div data-aos="fade-up" data-aos-duration="1000">
					<h1>
						LifeProt
						<span style={{ color: "green" }}>Scientific</span>
					</h1>
					<br />

					<p
						className="comp-info"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						We supply quality scientific equipment and machinery for
						various needs
					</p>

					<p
						id="mach-type"
						data-aos="fade-up"
						data-aos-duration="1400"
					>
						Manufacturing Machines / Pharmaceutical Equipment / Food
						and Chemical Industrial Machines
					</p>
				</div>
			</section>
			<br />
			<br />
			<br />
			<br />
			<section
				data-aos="fade-up"
				className="Prod-heade-cont"
				data-aos-duration="1000"
			>
				<h1 className="Prod-header"> Featured Products</h1>
				<br />
				<section className="home-prod">
					{pharmaceuticalEquipments
						.filter((machine) => [1, 2, 3, 4].includes(machine.id)) // Only show IDs 1, 2, 3, and 4
						.map((machine) => (
							<div key={machine.id}>
								<fieldset>
									<Link to={`/Machine/${machine.id}`}>
										<img
											className="imgg"
											src={machine.pic}
											alt={machine.Name}
										/>
										<br />
										<br />
									</Link>
									<p>{machine.details}</p>
								</fieldset>
							</div>
						))}
				</section>
				<br />
			</section>

			<section className="Order-sect-cont">
				<section
					className="Order-sect
				"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="OrderP-Head">ORDER PROCESS</h1>
					<br />
					<div className="Steps-cont" data-aos-duration="1200">
						<div data-aos="fade-right">
							<div className="Steps">
								<div>
									<h1>Step 1: Initial Inquiry and Contact</h1>
									<br />
									<p>
										Reach out to us via our social media
										platforms or official contact channels
										to express your interest in our products
										and discuss your requirements in detail.
									</p>
								</div>
								<div>
									<img src={inq} alt="Inquiry" />
								</div>
							</div>

							<div className="Steps">
								<div>
									<h1>
										Step 2: Reviewing and Confirming the
										Solution
									</h1>
									<br />
									<p>
										Our expert team will evaluate your
										requirements, discuss feasible
										solutions, and propose the best option.
										Once we finalize the details, we will
										move forward with the order process.
									</p>
								</div>
								<div>
									<img
										src={solution}
										alt="Solution Confirmation"
									/>
								</div>
							</div>

							<div className="Steps">
								<div>
									<h1>
										Step 3: Placing the Order and Making a
										Deposit
									</h1>
									<br />
									<p>
										After confirming the solution, you will
										officially place your order and make the
										initial deposit, allowing us to initiate
										the production process as per the agreed
										specifications.
									</p>
								</div>
								<div>
									<img src={order} alt="Order and Deposit" />
								</div>
							</div>
						</div>

						<div data-aos="fade-left" data-aos-duration="1200">
							<div className="Steps">
								<div>
									<h1>
										Step 4: Manufacturing, Quality Control,
										and Testing
									</h1>
									<br />
									<p>
										Our production team will begin
										manufacturing your order. Each unit
										undergoes strict quality control checks
										and multiple testing phases to ensure
										optimal performance before shipment.
									</p>
								</div>
								<div>
									<img
										src={testing}
										alt="Production and Testing"
									/>
								</div>
							</div>

							<div className="Steps">
								<div>
									<h1>
										Step 5: Packaging, Shipping, and Secure
										Delivery
									</h1>
									<br />
									<p>
										We carefully package each item to
										prevent damage during transit. We use
										secure shipping methods, including iron
										shelves, to optimize space and reduce
										transportation costs while ensuring safe
										delivery.
									</p>
								</div>
								<div>
									<img src={shipping} alt="Shipping" />
								</div>
							</div>

							<div className="Steps">
								<div>
									<h1>
										Step 6: Installation, Setup, and
										After-Sales Support
									</h1>
									<br />
									<p>
										Upon receiving your order, our technical
										team will guide you through installation
										and setup. We offer remote assistance
										via video calls or provide detailed
										instructional videos to ensure a smooth
										operation.
									</p>
								</div>
								<div>
									<img src={install} alt="Installation" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
			<br />
			<br />

			<section>
				<Footer />
			</section>
		</section>
	);
}

export default Home;
