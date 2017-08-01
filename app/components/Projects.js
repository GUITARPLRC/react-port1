import React from 'react'
import { Paper, RaisedButton } from 'material-ui';

import jqueryIcon from '../images/jquery-icon.png';
import reactIcon from '../images/react-icon.png';
import d3 from '../images/d3-icon.png';
import js from '../images/js.png';

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
					<RaisedButton label="React" labelPosition="before" onClick={() => { this.toggleShow('react') }}>
						<img src={reactIcon} id="react" style={{color:'white',margin:'-3px 0 0 -10px',width:30}} />
					</RaisedButton>
					<RaisedButton label="D3.js" labelPosition="before" onClick={() => { this.toggleShow('d3') }}>
						<img src={d3} id="d3" style={{margin:'-3px 10px 0 0', width:15}} />
					</RaisedButton>
					<RaisedButton label="API" labelPosition="before" onClick={() => { this.toggleShow('api') }}>
						<i className="fa fa-code" aria-hidden="true"></i>
					</RaisedButton>
					<RaisedButton label="Vanilla JS" labelPosition="before" onClick={() => { this.toggleShow('vanilla') }}>
						<img src={js} id="vanilla" style={{color:'white',margin:'-3px 10px 0 -5px',width:20}} />
					</RaisedButton>
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
