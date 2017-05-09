var React = require('react');

import movie from '../images/movie.png';
import markdown from '../images/markdown.png';
import recipe from '../images/recipe.png';
import github from '../images/github.png';
import leaderboard from '../images/leaderboard.png';

class ReactProjects extends React.Component {
	render() {
		return (
			<div className="projects">
				<h2>React Projects</h2>
				<p>All projects here are created using the React library</p>
				<div className='items'>
					<div>
						<img src={movie} alt="pic of movie project" />
						<div className="text">
							<h3>Movie Search</h3>
						</div>
					</div>
					<div>
						<img src={markdown} alt="pic of markdown project" />
						<div className="text">
							<h3>Markdown Preview</h3>
						</div>
					</div>
					<div>
						<img src={recipe} alt="pic of recipe project" />
						<div className="text">
							<h3>Recipe List</h3>
						</div>
					</div>
					<div>
						<img src={github} alt="pic of github battle project" />
						<div className="text">
							<h3>Github Battle</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = ReactProjects
