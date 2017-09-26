import React from 'react';
import me from '../images/me.jpg';

import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import reactIcon from '../images/react.jpg';

import mongo from '../images/mongo.jpg';
import node from '../images/node.jpg';
import express from '../images/express.jpg';
import d3 from '../images/d3.jpg';

import { RaisedButton } from 'material-ui';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<h1>My Name is Chuck Reynolds and I am a Front End Developer</h1>
				<img src={me} alt="My Avatar" style={{ borderRadius: '50%' }} />
				<p>
					I am currently living outside of Chicago, IL and I have a passion for making web sites and learning about new
					trends in web development.
				</p>
				<p>
					When I am away from my computer I enjoy spending time with my wife and 2 kids, playing guitar, watching
					movies, and playing Xbox.
				</p>
				<p>
					If you are a business seeking a web presence or an employer looking to hire, you can email me
					<span>
						<a href="mailto:guitarplrc@yahoo.com"> HERE.</a>
					</span>
				</p>
				<RaisedButton label="Download Resume" primary={true} href="./ChuckReynoldsResume.pdf" download />
				<div className="skills">
					<h2>Skills</h2>
					<div className="eachSkill">
						<div>
							<img src={html} alt="html icon" />
							<p>HTML5</p>
						</div>
						<div>
							<img src={css} alt="css icon" />
							<p>CSS3</p>
						</div>
						<div>
							<img src={js} alt="javacript icon" />
							<p>JavaScript</p>
						</div>
						<div>
							<img src={reactIcon} alt="react icon" />
							<p>React.js</p>
						</div>
					</div>
					<div className="eachSkill">
						<div>
							<img src={d3} alt="d3 icon" />
							<p>D3.js</p>
						</div>
						<div>
							<img src={node} alt="node icon" />
							<p>Node.js</p>
						</div>
						<div>
							<img src={express} alt="express icon" />
							<p>Express.js</p>
						</div>
						<div>
							<img src={mongo} alt="mongo" />
							<p>MongoDB</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Home;
