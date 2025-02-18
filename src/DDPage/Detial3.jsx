import React from 'react'
import { useParams } from "react-router-dom";
import { pharmaceuticalEquipments} from "../Lists/Homelist";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
function Detial3() {
const { id } = useParams();

const phamachines = pharmaceuticalEquipments.find(
	(mach) => mach.id === Number(id)
);

return (
	<section >
		<Nav />
		<section className="D-Sec">
			<div>
				<div className="img-stick">
					<img src={phamachines.pic} alt="chemmachines" />
				</div>
			</div>

			<div>
				<div className="just-stick">
					<h1 className="Mname">{phamachines.Name}</h1>
					<br />
					<p className="Mdecs">{phamachines.Description}</p>
					<p className="Mdecs">
						<b className="Mdecss-b">.</b>
						{phamachines.Specifications}
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

export default Detial3;