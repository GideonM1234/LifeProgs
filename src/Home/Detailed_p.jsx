import React from 'react'
import { useParams } from 'react-router-dom'
import { homeList } from '../Lists/Homelist';
import Nav from '../Nav/Nav';
import "./home.css";
import Footer from '../Footer/Footer';
function Detailed_p() {
    const {id} = useParams();

    const machines = homeList.find((mach) => mach.id === Number(id));

    if (!machines) {
		return <p>404</p>;
	}
  return (
		<div>
			<Nav />
			<br />
			<section
				className="D-Sec"
				data-aos="fade-down"
				data-aos-duration="1000"
			>
				<div>
					<div className='img-stick'>
					<img src={machines.pic} alt="machineimg" />
					</div>
				</div>
				<div>
					<div className="just-stick">
						<p className="Mname">{machines.Name}</p>
						<br />
						<p className="Mdecs">{machines.Description}</p>
					</div>
				</div>
			</section>
			<br />
			<br />
			<Footer />
		</div>
  );
}

export default Detailed_p;