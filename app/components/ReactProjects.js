import React from 'react';
import { Link } from 'react-router-dom';

import movie from '../images/movie.jpg';
import markdown from '../images/markdown.jpg';
import recipe from '../images/recipe.jpg';
import gameoflife from '../images/gameoflife.jpg';

class ReactProjects extends React.Component {
	constructor() {
		super();
		this.state = {
			projectName: null
		}
	}
	render() {
		return (
			<div className="projects">
				<h2>React Projects</h2>
				<p>All projects in this section are created using the React library, including this site which uses React Router and Material-UI</p>
				<div className='items'>
					<Link to={{
						pathname: '/projects/details',
						search: `?movie`
					}}>
						<div>
							<img src={movie} alt="pic of movie project" />
							<div className="text">
								<h3>Movie Search</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?markdown`
					}}>
						<div>
							<img src={markdown} alt="pic of markdown project" />
							<div className="text">
								<h3>Markdown Preview</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?recipe`
					}}>
						<div>
							<img src={recipe} alt="pic of recipe project" />
							<div className="text">
								<h3>Recipe List</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?gameoflife`
					}}>
						<div>
							<img src={gameoflife} alt="pic of game of life project" />
							<div className="text">
								<h3>Conway's Game of Life</h3>
							</div>
						</div>
					</Link>

				</div>
			</div>
		)
	}
}

module.exports = ReactProjects
