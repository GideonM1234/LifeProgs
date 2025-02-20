import React from 'react'
import Logo from '../../public/WhatsApp Image 2024-11-13 at 13.40.45_9e05e0ec.jpg'
import { Link } from 'react-router-dom';
import './footer.css'
function Footer() {
  return (
		<section className="footer-section">
			<section
				className="F_Sec"
				data-aos="fade-up"
				data-aos-duration="1200"
			>
				<div>
					<Link to="/Home">
						<img src={Logo} alt="" />
					</Link>
				</div>

				<div>
					<span>
						<i class="bx bxs-phone"></i>
						<a href="tel:+2349029541796" >
							<p>+234 902 954 1796</p>
						</a>
					</span>
					<br />
					<span>
						<i class="bx bx-envelope"></i>
						<a
							href="mailto:info.lifeprotscientific@gmail.com"
						>
							<p>info.lifeprotscientific@gmail.com</p>
						</a>
					</span>
					<br />
					<span>
						<i class="bx bxs-location-plus"></i>
						<p>
							Km 38 Lagos-Abeokuta Road Sango-Ota Ogun State
							Nigeria
						</p>
					</span>
				</div>
				<div>
					<h2>Useful Links</h2>
					<br />

					<ul>
						<Link to={"/Home"} className="link">
							<li>Home</li>
						</Link>
						<br />
						<Link to={"/About"} className="link">
							<li>About</li>
						</Link>
						<br />
						<Link to={"/"} className="link">
							<li>Product</li>
						</Link>
						<br />
						<Link to={"/Services"} className="link">
							<li>Service</li>
						</Link>
						<br />
						<Link to={"/ContactUs"} className="link">
							<li>Contact Us</li>
						</Link>
					</ul>
				</div>
				<div>
					<h2>Solution Lines</h2>
					<br />
					<ul>
						<Link to={"/"} className="link">
							<li>Manufacturing Machines</li>
						</Link>
						<br />
						<Link to={"/"} className="link">
							<li>Pharmaceutical Equipments</li>
						</Link>
						<br />
						<Link to={"/"} className="link">
							<li>Chemical Industrial Machine</li>
						</Link>
					</ul>
					<br />

					<span>
						<a href="https://www.facebook.com/profile.php?id=100083066394169&mibextid=JRoKGi">
							<i class="bx bxl-facebook-square face"></i>
						</a>

						<a href="https://www.instagram.com/lifeprotscientific/profilecard/?igsh=MXZta2p1Nmh6d2xrbw==">
							<i class="bx bxl-instagram-alt inst"></i>
						</a>

						<a href="https://www.youtube.com/@LifeprotScientific">
							<i class="bx bxl-youtube you"></i>
						</a>

						<a href="https://x.com/LifeprotS">
							<i class="bx bxl-twitter twit"></i>
						</a>

						<a href="http://www.linkedin.com/in/">
							<i class="bx bxl-linkedin-square linkd"></i>
						</a>
					</span>
				</div>
			</section>
			<br />

			<div className="righreserved">
				<p className="bline"></p>
				<br />
				<p className="bltext">
					&copy; LifeProtScientific || 2024 All right reserved{" "}
				</p>
			</div>
		</section>
  );
}

export default Footer;