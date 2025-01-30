import Nav from '../Nav/Nav'
import './services.css'
import Footer from '../Footer/Footer';
import serveimg from '../assets/img/Services.jpg'
import factory from '../assets/img/factory.png'
import packaging from '../assets/img/packaging.png'
import regulatory from '../assets/img/regulatory-compliance.png'
import gear from '../assets/img/gear.png'
import capacity from '../assets/img/capacity.png'
import projects from '../assets/img/projects.png'
import worklist from '../assets/img/work-list.png'
import machinelearning from '../assets/img/machine-learning.png'
function Service() {
  return (
		<section>
			<Nav />
			<br />
			<section className="Service-page">
				<div className="service-header">
					<div
						className="serv-hero-cont"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<h1 data-aos="fade-up" data-aos-duration="1200">
							{" "}
							Services
						</h1>
						<p data-aos="fade-up" data-aos-duration="1600">
							LifeProt Scientific empowers African industries with
							innovative equipment, materials, packaging, and
							expert business solutions for sustainable success
						</p>
					</div>
				</div>

				<section
					className="services-section-cont"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div className="Services">
						<div
							className="service-group"
							data-aos="fade-right"
							data-aos-duration="1200"
						>
							<div className="serv-info">
								<div className="serv-img">
									<img src={factory} alt="" />
								</div>
								<div>
									<h2>
										Scientific Equipment and Machinery
										Supply
									</h2>
									<p>
										At LifeProt Scientific, we provide
										cutting-edge scientific tools,
										machinery, and lab equipment tailored
										for industries like healthcare,
										pharmaceuticals, food processing, and
										manufacturing, backed by expert
										maintenance, calibration, and repair
										services.
									</p>
								</div>
							</div>

							<div className="serv-info">
								<div className="serv-img">
									<img src={packaging} alt="" />
								</div>
								<div>
									<h2>
										Raw Materials and Packaging Solutions
									</h2>
									<p>
										LifeProt Scientific offers high-quality
										raw materials that ensure industry
										compliance, along with customized
										packaging solutions designed to meet
										both functional and aesthetic business
										needs.
									</p>
								</div>
							</div>

							<div className="serv-info">
								<div className="serv-img">
									<img src={gear} alt="" />
								</div>
								<div>
									<h2>
										Business Growth and Strategy Support
									</h2>
									<p>
										LifeProt Scientific offers strategic
										advisory services to startups and
										established businesses, optimizing
										operations and scaling effectively.
									</p>
								</div>
							</div>

							<div className="serv-info">
								<div className="serv-img">
									<img src={capacity} alt="" />
								</div>
								<div>
									<h2>
										Customized Training and Capacity
										Building
									</h2>
									<p>
										LifeProt Scientific provides workshops
										and training on the effective use of
										scientific equipment, along with
										capacity-building programs to enhance
										technical skills.
									</p>
								</div>
							</div>
						</div>

						{/* Second Main Div */}
						<div
							className="service-group"
							data-aos="fade-left"
							data-aos-duration="1200"
						>
							<div className="serv-info">
								<div className="serv-img">
									<img src={regulatory} alt="" />
								</div>
								<div>
									<h2>
										Regulatory Compliance and Quality
										Assurance Services
									</h2>
									<p>
										LifeProt Scientific provides expert
										assistance with regulatory compliance,
										including Quality Manuals, Site Master
										Files, and Batch Manufacturing Records.
										We also offer product registration
										guidance and quality assurance audits to
										help businesses maintain high
										operational standards.
									</p>
								</div>
							</div>

							<div className="serv-info">
								<div className="serv-img">
									<img src={projects} alt="" />
								</div>
								<div>
									<h2>
										Sustainability and Community Development
										Initiatives
									</h2>
									<p>
										LifeProt Scientific collaborates with
										businesses to develop eco-friendly,
										sustainable practices in operations and
										product development.
									</p>
								</div>
							</div>

							<div className="serv-info">
								<div className="serv-img">
									<img src={worklist} alt="" />
								</div>
								<div>
									<h2>Industry-Specific Consulting</h2>
									<p>
										LifeProt Scientific provides tailored
										solutions for food safety,
										pharmaceutical compliance, and
										healthcare equipment optimization.
									</p>
								</div>
							</div>

							<div className="serv-info">
								<div className="serv-img">
									<img src={machinelearning} alt="" />
								</div>

								<div>
									<h2>
										Technology-Driven Business Solutions
									</h2>
									<p>
										LifeProt Scientific implements advanced
										technologies like automation tools and
										IoT solutions for operational
										efficiency.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<Footer />
		</section>
  );
}

export default Service;