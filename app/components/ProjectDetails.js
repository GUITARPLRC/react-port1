import React from 'react';
import { RaisedButton } from 'material-ui';

import projectInfo from './projectInfo';

class ProjectDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: this.props.location.search
		};
	}

	componentDidMount() {
		setTimeout(() => {
			const el = document.querySelector('.details');
			el.style.transition = 'opacity 1.5s';
			el.style.opacity = 1;
		}, 200);
	}

	componentWillUnmount() {
		const el = document.querySelector('.details');
		el.style.transition = 'opacity 1s';
		el.style.opacity = 0;
	}

	handleClick = () => {
		const title = this.state.project.slice(1);
		window.location = projectInfo[title].link;
	};

	render() {
		const project = this.state.project.slice(1);

		return (
			<div className="details">
				<h2>{projectInfo[project].title}</h2>
				<img src={projectInfo[project].image} alt="pic of project" />
				<p>{projectInfo[project].info}</p>
				<h3>Tools:</h3>
				<ul>{projectInfo[project].tools.map(each => <li key={each}>{each}</li>)}</ul>
				<RaisedButton label="Click Here To Open App" primary onClick={this.handleClick} />
			</div>
		);
	}
}

module.exports = ProjectDetails;
