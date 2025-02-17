import React from 'react'
import { useParams } from "react-router-dom";
import {chemicalIndustrialMachines } from "../Lists/Homelist";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
function Detailp2() {
	const { id } = useParams();

	const chemmachines =chemicalIndustrialMachines.find(
		(mach) => mach.id === Number(id)
	);

	return (
		<section>
			<Nav />
			<section className="D-Sec">
				<div>
					<div className="img-stick">
						<img src={chemmachines.pic} alt="chemmachines" />
					</div>
				</div>

				<div>
					<div className="just-stick">
						<h1 className="Mname">{chemmachines.Name}</h1>
						<br />
						<p className="Mdecs">{chemmachines.Description}</p>
						<p className="Mdecs">
							<b className="Mdecss-b">.</b>
							{chemmachines.Specifications}
						</p>
					</div>
				</div>
			</section>
			<br />
<br />
			<Footer />
		</section>
	);
}

export default Detailp2;