import React from 'react';
import { Link } from 'react-router-dom';

import wiki from '../images/wiki.jpg';
import weather from '../images/weather.jpg';
import twitch from '../images/twitch.jpg';
import leaderboard from '../images/leaderboard.jpg';

class Api extends React.Component {
	render() {
		return (
			<div className="projects">
				<h2>API Projects</h2>
				<p>All projects in this section contain some sort of fetching of API data</p>
				<div className="items">
					<Link to={{
						pathname: '/projects/details',
						search: `?wiki`
					}}>
						<div>
							<img src={wiki} alt='pic of wiki project' />
							<div className="text">
								<h3>Wiki Search</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?weather`
					}}>
						<div>
							<img src={weather} alt='pic of weather project' />
							<div className="text">
								<h3>Local Weather</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?twitch`
					}}>
						<div>
							<img src={twitch} alt='pic of twitch project' />
							<div className="text">
								<h3>Twitch Channels</h3>
							</div>
						</div>
					</Link>

					<Link to={{
						pathname: '/projects/details',
						search: `?leaderboard`
					}}>
						<div>
							<img src={leaderboard} alt='pic of leaderboard project' />
							<div className="text">
								<h3>Free Code Camp Leaderboard</h3>
							</div>
						</div>
					</Link>

				</div>
			</div>
		)
	}
}

module.exports = Api
