import React from 'react';
import { Link } from 'react-router-dom';

import gdp from '../images/US_GDP.jpg';
import heatmap from '../images/heatmap.jpg';
import force from '../images/force.jpg';
import scatterplot from '../images/scatterplot.jpg';

class D3Projects extends React.Component {
	render() {
		return (
			<div className='projects'>
				<h2>D3.js Projects</h2>
				<p>The projects shown here make use of the D3.js library</p>
				<div className="items">
					<Link to={{
						pathname: '/projects/details',
						search: `?gdp`
					}}>
						<div>
							<img src={gdp} alt="pic of US GDP project" />
							<div className="text">
								<h3>US Gross Domestic Product</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?heatmap`
					}}>
						<div>
							<img src={heatmap} alt="pic of heat map project" />
							<div className="text">
								<h3>Surface Temperature</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?force`
					}}>
						<div>
							<img src={force} alt="pic of force graph project" />
							<div className="text">
								<h3>National Contiguity</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?scatterplot`
					}}>
						<div>
							<img src={scatterplot} alt="pic of scatterplot project" />
							<div className="text">
								<h3>Professional Bicycle Racing Doping</h3>
							</div>
						</div>
					</Link>
				</div>
			</div>
		)
	}
}

module.exports = D3Projects
