var React = require('react');
var Link = require('react-router-dom').Link;

import { RaisedButton } from 'material-ui';

import projectInfo from './projectInfo';

class ProjectDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: this.props.location.search
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		window.location = `http://chuckreynolds.altervista.org/${this.state.project.slice(1)}/index.html`;
	}

	render() {

		var project = this.state.project.slice(1);

		return (
			<div className="details">
				<h2>{projectInfo[project].title}</h2>
				<img src={projectInfo[project].image} alt="pic of project" />
				<p>{projectInfo[project].info}</p>
				<h3>Tools:</h3>
				<ul>
					{projectInfo[project].tools.map(function(each) {
						return (
							<li key={each}>{each}</li>
						)
					})}
				</ul>
				<RaisedButton label="Open App" primary={true} onClick={this.handleClick} />
			</div>
		)
	}
}

module.exports = ProjectDetails
