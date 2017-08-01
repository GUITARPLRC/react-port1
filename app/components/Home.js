import React from 'react';
import me from '../images/me.png';

import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import jquery from '../images/jquery.png';
import reactIcon from '../images/react-icon.png';

import { RaisedButton } from 'material-ui';

class Home extends React.Component {
	render() {
		return (
			<div id='home'>
				<h1>My Name is Chuck Reynolds and I am a Front End Developer</h1>
				<img src={me} alt="My Avatar" style={{borderRadius:'50%'}}></img>
				<p>I am currently living outside of Chicago, IL and I have a passion for making web sites and
				learning about new trends in web development.</p>
				<p>When I am away from my computer I enjoy spending time with my family, playing guitar, watching movies, and playing Xbox.</p>
				<p>If you are a business seeking a web presence or an employer looking to hire, you can email me
				<span><a href="mailto:guitarplrc@yahoo.com"> HERE.</a></span></p>
				<RaisedButton label="Download Resume" primary={true} href="./ChuckReynoldsResume.pdf" download />
				<div className='skills'>
					<h2>Core Skills</h2>
					<div className="eachSkill">
						<div>
							<img src={html} alt='html icon' />
							<p>HTML5</p>
						</div>
						<div>
							<img src={css} alt='css icon' />
							<p>CSS3</p>
						</div>
						<div>
							<img src={js} alt='javacript icon' />
							<p>Javascript</p>
						</div>
						<div>
							<img src={jquery} alt='jquery icon' />
							<p>jQuery</p>
						</div>
						<div>
							<img src={reactIcon} alt='react icon' style={{height:'128px'}} />
							<p>React</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Home;
