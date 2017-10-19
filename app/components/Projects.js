import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from 'material-ui';

import movie from '../images/movie.jpg';
import dungeon from '../images/dungeon.jpg';
import rect from '../images/rect.jpg';
import gameoflife from '../images/gameoflife.jpg';
import gdp from '../images/US_GDP.jpg';
import heatmap from '../images/heatmap.jpg';
import force from '../images/force.jpg';
import scatterplot from '../images/scatterplot.jpg';
import games from '../images/games.jpg';
import timestamp from '../images/timestamp.jpg';

class Projects extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			const el = document.querySelector('.Projects');
			el.style.transition = 'opacity 1.5s';
			el.style.opacity = 1;
		}, 200);
	}

	componentWillUnmount() {
		const el = document.querySelector('.Projects');
		el.style.transition = 'opacity 1s';
		el.style.opacity = 0;
	}

	render() {
		return (
			<div className="Projects">
				<Paper
					id="projectsIntro"
					zDepth={5}
					style={{
						backgroundColor: '#315C6F',
						color: '#fff',
						margin: '3% auto 0 auto',
						padding: 20,
						width: '80%'
					}}
				>
					<div style={{ textAlign: 'center' }}>
						<h2>Work</h2>
						<p>Here is some of my current work. Click on an image to get more info and to see the project live!</p>
					</div>
					<h3>React.js</h3>
					<div className="projects">
						<div className="items">
							<Link
								to={{
									pathname: '/work/details',
									search: `?movie`
								}}
							>
								<div>
									<img src={movie} alt="pic of movie project" />
									<div className="text">
										<h3>Movie Search</h3>
									</div>
								</div>
							</Link>

							<Link
								to={{
									pathname: '/work/details',
									search: `?dungeon`
								}}
							>
								<div>
									<img src={dungeon} alt="pic of dungeon project" />
									<div className="text">
										<h3>Dungeon of Doom</h3>
									</div>
								</div>
							</Link>

							<Link
								to={{
									pathname: '/work/details',
									search: `?rect`
								}}
							>
								<div>
									<img src={rect} alt="pic of layout project" />
									<div className="text">
										<h3>Create A Layout</h3>
									</div>
								</div>
							</Link>

							<Link
								to={{
									pathname: '/work/details',
									search: `?gameoflife`
								}}
							>
								<div>
									<img src={gameoflife} alt="pic of game of life project" />
									<div className="text">
										<h3>Conway's Game of Life</h3>
									</div>
								</div>
							</Link>
						</div>
					</div>

					<h3>Node.js</h3>
					<div className="work">
						<div className="items">
							<Link
								to={{
									pathname: '/work/details',
									search: `?games`
								}}
							>
								<div>
									<img src={games} alt="pic of games project" />
									<div className="text">
										<h3>Game Search</h3>
									</div>
								</div>
							</Link>

							<Link
								to={{
									pathname: '/work/details',
									search: `?timestamp`
								}}
							>
								<div>
									<img src={timestamp} alt="pic of timestamp project" />
									<div className="text">
										<h3>Timestamp Service</h3>
									</div>
								</div>
							</Link>
						</div>
					</div>

					<h3>D3.js</h3>
					<div className="work">
						<div className="items">
							<Link
								to={{
									pathname: '/work/details',
									search: `?gdp`
								}}
							>
								<div>
									<img src={gdp} alt="pic of US GDP project" />
									<div className="text">
										<h3>US Gross Domestic Product</h3>
									</div>
								</div>
							</Link>

							<Link
								to={{
									pathname: '/work/details',
									search: `?heatmap`
								}}
							>
								<div>
									<img src={heatmap} alt="pic of heat map project" />
									<div className="text">
										<h3>Surface Temperature</h3>
									</div>
								</div>
							</Link>

							<Link
								to={{
									pathname: '/work/details',
									search: `?force`
								}}
							>
								<div>
									<img src={force} alt="pic of force graph project" />
									<div className="text">
										<h3>National Contiguity</h3>
									</div>
								</div>
							</Link>

							<Link
								to={{
									pathname: '/work/details',
									search: `?scatterplot`
								}}
							>
								<div>
									<img src={scatterplot} alt="pic of scatterplot project" />
									<div className="text">
										<h3>Professional Bicycle Racing Doping</h3>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</Paper>
			</div>
		);
	}
}

module.exports = Projects;
