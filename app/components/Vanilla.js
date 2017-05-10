var React = require('react');

import music from '../images/music.jpg';
import quiz from '../images/quiz.jpg';
import magic from '../images/magic8.png';
import hangman from '../images/hangman.jpg';

class Vanilla extends React.Component {
	render() {
		return (
			<div className="projects">
				<h2>Vanilla JavaScript Projects</h2>
				<p>The projects shown here are all written with vanilla JavaScript</p>
				<div className="items">
					<div>
						<img src={music} alt="pic of music maker project" />
						<div className="text">
							<h3>Music Maker</h3>
						</div>
					</div>
					<div>
						<img src={magic} alt="pic of magic 8 ball project" />
						<div className="text">
							<h3>Magic 8-ball</h3>
						</div>
					</div>
					<div>
						<img src={hangman} alt="pic of hangman project" />
						<div className="text">
							<h3>Word Guess</h3>
						</div>
					</div>
					<div>
						<img src={quiz} alt="pic of simple quiz project" />
						<div className="text">
							<h3>Quiz</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Vanilla
