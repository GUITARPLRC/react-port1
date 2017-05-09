var React = require('react');

import wiki from '../images/wiki.png';
import weather from '../images/weather.png';
import twitch from '../images/twitch.png';
import github from '../images/github.png';
import leaderboard from '../images/leaderboard.png';

class Api extends React.Component {
	render() {
		return (
			<div className="projects">
				<h2>API Projects</h2>
				<p>All projects in this section contain some sort of fetching of API data</p>
				<div className="items">
					<div>
						<img src={wiki} alt='pic of wiki project' />
						<div className="text">
							<h3>Wiki Search</h3>
						</div>
					</div>
					<div>
						<img src={weather} alt='pic of weather project' />
						<div className="text">
							<h3>Local Weather</h3>
						</div>
					</div>
					<div>
						<img src={twitch} alt='pic of twitch project' />
						<div className="text">
							<h3>Twitch Channels</h3>
						</div>
					</div>
					<div>
						<img src={leaderboard} alt='pic of leaderboard project' />
						<div className="text">
							<h3>Free Code Camp Leaderboard</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Api
