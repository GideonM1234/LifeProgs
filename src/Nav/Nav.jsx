import React from "react";
import LogoIMG from "../assets/img/Untitled.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./nav.css";

function Nav() {
	const [open, setisopen] = useState(false);

	const toggleOpen = () => {
		setisopen(!open);
	};

	const toggleclose = () => {
		setisopen(false);
	};


	
	return (
		<section>
			<section className="Nav-sec">
				<div className="Navs">
					<div>
						<Link to={"/"}>
							<img src={LogoIMG} alt="Logo Image" />
						</Link>
					</div>

					<div>
						<ul>
							<Link to={"/"} className="link" tabindex="0">
								<li>Home</li>
							</Link>

							<Link to={"/About"} className="link" tabindex="0">
								<li>About</li>
							</Link>

							<Link
								to={"/Products"}
								className="link"
								tabindex="0"
							>
								<li>Product</li>
							</Link>

							<Link
								to={"/Services"}
								className="link"
								tabindex="0"
							>
								<li>Service</li>
							</Link>

							<Link
								to={"/ContactUs"}
								className="link"
								tabindex="0"
							>
								<li>Contact Us</li>
							</Link>
						</ul>
					</div>

					<div onClick={toggleOpen}>
						<i class="bx bx-menu"></i>
					</div>
				</div>
			</section>

			{open && (
				<section
					className="Small-nav"
					data-aos="fade-left"
					data-aos-anchor="#example-anchor"
					data-aos-offset="300"
					data-aos-duration="300"
				>
					<div onClick={toggleclose}>
						<i class="bx bx-x"></i>
					</div>
					<div>
						<ul>
							<Link
								to={"/"}
								className="link"
								onClick={toggleclose}
							>
								<li>Home</li>
							</Link>
							<br />
							<br />
							<br />
							<Link
								to={"/About"}
								className="link"
								onClick={toggleclose}
							>
								<li>About</li>
							</Link>
							<br />
							<br />
							<br />
							<Link
								to={"/Products"}
								className="link"
								onClick={toggleclose}
							>
								<li>Product</li>
							</Link>
							<br />
							<br />
							<br />
							<Link
								to={"/Services"}
								className="link"
								onClick={toggleclose}
							>
								<li>Service</li>
							</Link>
							<br />
							<br />
							<br />
							<Link
								to={"/ContactUs"}
								className="link"
								onClick={toggleclose}
							>
								<li>Contact Us</li>
							</Link>
						</ul>
					</div>
				</section>
			)}
		</section>
	);
}

export default Nav;
