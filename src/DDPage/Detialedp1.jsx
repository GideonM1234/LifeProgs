import React from 'react'
import {manufacturingMachines} from '../Lists/Homelist'
import { useParams } from 'react-router-dom'
import './dd.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
function Detialedp1() {
  const {id }= useParams()

    const manmachines = manufacturingMachines.find((mach) => mach.id === Number(id));

  return (
		<section>
			<Nav />
			<section className="D-Sec">
				<div>
					<div className="img-stick">
						<img src={manmachines.pic} alt="" />
					</div>
				</div>

				<div>
					<div className="just-stick">
						<h1 className="Mname">{manmachines.Name}</h1>
						<br />
						<p className="Mdecs">{manmachines.Description}</p>
						<p className="Mdecs">
							<b className="Mdecss-b">.</b>
							{manmachines.Specifications}
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

export default Detialedp1