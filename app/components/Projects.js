import React from 'react'
import { Paper, RaisedButton } from 'material-ui';

import reactIcon from '../images/react.jpg';
import d3 from '../images/d3.jpg';
import js from '../images/js.jpg';

import Api from './Api';
import ReactProjects from './ReactProjects';
import D3Projects from './D3Projects';
import Vanilla from './Vanilla';

import injectTapEventPlugin from 'react-tap-event-plugin';

class Projects extends React.Component {
	constructor() {
		super();
		this.state = {
			whichCategory: null
		}

		this.toggleShow = this.toggleShow.bind(this);
	}

	toggleShow(name) {
		if (this.state.whichCategory == name) {
			this.setState({ whichCategory: null })
		} else {
			this.setState({ whichCategory: name })
		}
	}

	render() {
		return (
			<div>
				<Paper id="projectsIntro" zDepth={5} style={{margin:'3% auto 0 auto', padding:50, width: '80%'}}>
					<h2>Here is a list of categories of my projects</h2>
					<p>Click a button to show projects in a selected category</p>
					<p>Click each example for more info!</p>
					<RaisedButton label="React" labelPosition="before" onClick={() => { this.toggleShow('react') }} />
					<RaisedButton label="D3.js" labelPosition="before" onClick={() => { this.toggleShow('d3') }} />
					<RaisedButton label="API" labelPosition="before" onClick={() => { this.toggleShow('api') }} />
					<RaisedButton label="Vanilla JS" labelPosition="before" onClick={() => { this.toggleShow('vanilla') }} />
				</Paper>

				{this.state.whichCategory == 'layout' && <Layouts />}
				{this.state.whichCategory == 'api' && <Api />}
				{this.state.whichCategory == 'react' && <ReactProjects />}
				{this.state.whichCategory == 'd3' && <D3Projects />}
				{this.state.whichCategory == 'vanilla' && <Vanilla />}
			</div>
		)
	}
}

module.exports = Projects;
