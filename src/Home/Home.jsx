import React from "react";
import Nav from "../Nav/Nav";
import "./home.css";
import { Link } from "react-router-dom";
import { homeList } from "../Lists/Homelist";
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

					<p id="mach-type"
						data-aos="fade-up"
						data-aos-duration="1400">
						Manufacturing Machines / Pharmaceutical Equipment / Food
						and Chemical Industrial Machines
					</p>
				</div>
			</section>
			<br />
			<br />
			<br />
			<br />
			<section data-aos="fade-up" data-aos-duration="1000">
				<h1 className="Prod-header"> Featured Products</h1>
				<br />
				<section className="home-prod">
					{homeList.map((machine) => (
						<div key={machine.id}>
							<fieldset>
								<Link to={`/Machine/${machine.id}`}>
									<img
										className="imgg"
										src={machine.pic}
										alt=""
									/>
									<br />
									<br />
								</Link>
								<p>{machine.Name}</p>
							</fieldset>
						</div>
					))}
				</section>
				<br />

				<section data-aos="fade-up" data-aos-duration="1000">
					<section className="Order-sect">
						<h1 className="OrderP-Head">ORDER PROCESS</h1>
						<br />
						<br />
						<br />
						<div className="Steps-cont">
							<div data-aos="fade-right" data-aos-duration="1200">
								<div className="Steps">
									<div>
										<h1>Step 1: Inquiry</h1>
										<br />
										<p>
											Send inquiries to our socail media
											handles
										</p>
									</div>
									<div>
										<img src={inq} alt="" />
									</div>
								</div>

								<div className="Steps">
									<div>
										<h1>STEP 2: Confirming the solution</h1>
										<br />
										<p>
											I will give the offer according your
											requirement after I discussing with
											our technical team.
										</p>
									</div>
									<div>
										<img src={solution} alt="" />
									</div>
								</div>

								<div className="Steps">
									<div>
										<h1>STEP 3: Order and Deposit</h1>
										<br />
										<p>
											Give the order and deposit the
											advance to start the production.
										</p>
									</div>

									<div>
										<img src={order} alt="" />
									</div>
								</div>
							</div>

							<div data-aos="fade-left" data-aos-duration="1200">
								<div className="Steps">
									<div>
										<h1>STEP 4: Production and testing</h1>
										<br />
										<p>
											We will start the production during
											one day after we receive the
											deposit.We will run each machine
											before delivery.
										</p>
									</div>

									<div>
										<img src={testing} alt="" />
									</div>
								</div>

								<div className="Steps">
									<div>
										<h1>STEP 5: Shipping</h1>
										<br />
										<p>
											Sea shipping is the best way to
											deliver the machines.We will use
											Iron shelves if we can to use every
											space for you to reduce the cost of
											sea freight.
										</p>
									</div>

									<div>
										<img src={shipping} alt="" />
									</div>
								</div>
								<div className="Steps">
									<div>
										<h1>STEP 6: Installation</h1>
										<br />
										<p>
											After receiving the machines,our
											technician team will help you to
											install and adjust the machines.We
											can video call to teach you directly
											or send you the video to you.
										</p>
									</div>
									<div>
										<img src={install} alt="" />
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</section>

			<section>
				<Footer />
			</section>
		</section>
	);
}

export default Home;
