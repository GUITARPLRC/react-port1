import React from 'react';
import { Link } from 'react-router-dom';

import { RaisedButton } from 'material-ui';

import projectInfo from './projectInfo';

class ProjectDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: this.props.location.search
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let title = this.state.project.slice(1);
		window.location = projectInfo[title].link;
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
						return <li key={each}>{each}</li>;
					})}
				</ul>
				<RaisedButton label="Click Here To Open App" primary={true} onClick={this.handleClick} />
			</div>
		);
	}
}

module.exports = ProjectDetails;
