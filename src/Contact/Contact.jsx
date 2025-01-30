import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import "./contact.css";
import Footer from "../Footer/Footer";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phonenumber: "",
		message: "",
	});

	const [state, handleSubmit] = useForm("mgvoernn");
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// UseEffect to reset form fields after successful submission
	useEffect(() => {
		if (state.succeeded) {
			setShowSuccessMessage(true); // Show success message after form submission
			setFormData({
				name: "",
				email: "",
				phonenumber: "",
				message: "",
			});
		}
	}, [state.succeeded]); // Run when the state.succeeded changes

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		await handleSubmit(e); // Submits the form using Formspree's hook
	};

	const handleSuccessMessageClick = () => {
		setShowSuccessMessage(false); // Hide success message when clicked
	};

	return (
		<section>
			<Nav />
			<br />
			<section
				className="Contact-sect"
				data-aos="fade-down"
				data-aos-duration="1000"
			>
				<div>
					<h1 className="Cont-h">
						[ <span style={{ color: "black" }}>Contact Us</span> ]
					</h1>
					<br />
					<h1 className="lht-h1">Let's Get in Touch</h1>

					<div className="cont-info">
						<div className="con-info">
							<div className="cont-info-i">
								<i className="bx bxs-envelope"></i>
							</div>
							<div className="cont-info-w">
								<h2>Email Address</h2>
								<p>info.lifeprotscientific@gmail.com</p>
							</div>
						</div>

						<div className="con-info">
							<div className="cont-info-i">
								<i className="bx bxs-phone"></i>
							</div>
							<div className="cont-info-w">
								<h2>Call Us</h2>
								<p>+234 902 954 1796</p>
							</div>
						</div>

						<div className="con-info">
							<div className="cont-info-i">
								<i className="bx bxs-location-plus"></i>
							</div>
							<div className="cont-info-w">
								<h2>Location</h2>
								<p>
									Km 38 Lagos-Abeokuta Road Sango-Ota Ogun
									State Nigeria
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="input-div">
					<form
						action="https://formspree.io/f/mgvoernn"
						method="POST"
						onSubmit={handleFormSubmit}
					>
						<div className="inp-cont">
							<div>
								<input
									className="input1"
									type="text"
									id="name"
									name="name"
									placeholder="*Name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
								<ValidationError
									prefix="Name"
									field="name"
									errors={state.errors}
								/>
							</div>
							<div>
								<input
									id="email"
									className="input1"
									type="email"
									name="email"
									placeholder="*Email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
								<ValidationError
									prefix="Email"
									field="email"
									errors={state.errors}
								/>
							</div>
						</div>
						<br />

						<div>
							<input
								type="text"
								className="inp-ph"
								placeholder="*Phone Number"
								name="phonenumber"
								value={formData.phonenumber}
								onChange={handleChange}
								required
							/>
							<ValidationError
								prefix="Phonenumber"
								field="phonenumber"
								errors={state.errors}
							/>
						</div>
						<br />

						<div>
							<textarea
								name="message"
								placeholder="*Message"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
						</div>
						<br />

						<button type="submit" disabled={state.submitting}>
							Submit
						</button>
					</form>
				</div>
			</section>

			{state.succeeded && showSuccessMessage && (
				<div
					className="success-message-cont"
					data-aos="fade-down"
					data-aos-duration="1000"
					onClick={handleSuccessMessageClick} // Hide on click
				>
					<span>
						<i className="bx bx-check"></i>
						<p className="success-message">
							Thanks for Contacting Us!
						</p>
					</span>
				</div>
			)}

			<br />
			<br />

			<div className="fff">
				<Footer />
			</div>
		</section>
	);
}

export default Contact;
