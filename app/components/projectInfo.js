import movie from '../images/movie.jpg';
import dungeon from '../images/dungeon.jpg';
import rect from '../images/rect.jpg';
import gameoflife from '../images/gameoflife.jpg';
import wiki from '../images/wiki.jpg';
import weather from '../images/weather.jpg';
import twitch from '../images/twitch.jpg';
import leaderboard from '../images/leaderboard.jpg';
import gdp from '../images/US_GDP.jpg';
import heatmap from '../images/heatmap.jpg';
import force from '../images/force.jpg';
import scatterplot from '../images/scatterplot.jpg';
import games from '../images/games.jpg';
import timestamp from '../images/timestamp.jpg';

module.exports = {
	movie: {
		title: 'Movie Search',
		info: 'This was one of my first projects with React and has since went through several changes.',
		tools: ['HTML/CSS', 'React'],
		image: movie,
		link: 'http://chuckreynolds.tech/movie/index.html'
	},
	dungeon: {
		title: 'Dungeon of Doom',
		info:
			'My second project working with Redux. This was my first time implementing a game, so figuring out how the board,' +
			' player, enemies, items are all relational to each other was really hard to comprehend. In the end, this really pushed my skills ' +
			'and knowledge of Redux, game design, and computational thinking about how things are related within a structure.',
		tools: ['HTML/CSS', 'React', 'Redux'],
		image: dungeon,
		link: 'http://chuckreynolds.tech/dungeon/index.html'
	},
	rect: {
		title: 'Create A Layout',
		info: 'This is a great tool to visual a layout design and add layering.',
		tools: ['HTML/CSS', 'Bootstrap', 'React', 'React-RND'],
		image: rect,
		link: 'http://guitarplrc.github.io/rect-proj2'
	},
	gameoflife: {
		title: "Conway's Game of Life",
		info:
			'This was my first project using Redux. The Flux/Redux concept was not really hard to understand, but implementing the concept proved to ' +
			'be the hard part. One issue I ran into, with this project, was deep cloning an object to reference as previous state, but I quickly found a way to do this.',
		tools: ['HTML/CSS', 'React', 'Redux'],
		image: gameoflife,
		link: 'http://chuckreynolds.tech/gameoflife/index.html'
	},
	wiki: {
		title: 'Wiki Search',
		info:
			'A great project to work with the Wikimedia API for the first time. The API is not the easiest to understand but overall the documentation ' +
			'is decent and helped a lot.',
		tools: ['HTML/CSS', 'Javascript', 'Wikimedia API'],
		image: wiki,
		link: 'http://chuckreynolds.tech/wiki/index.html'
	},
	weather: {
		title: 'Local Weather',
		info:
			"At first I was using local location API to get a client's location in order to serve the weather report. That soon proved to be a nusance. " +
			'I then resorted to using Google location services to get better support for all clients.',
		tools: ['HTML/CSS', 'Javascript', 'OpenWeather API'],
		image: weather,
		link: 'http://chuckreynolds.tech/weather/index.html'
	},
	twitch: {
		title: 'Twitch Channels',
		info:
			'The Twitch API was another hard one to work with. Halfway through the project they changed their endpoints and data structure which meant I had to ' +
			'refactor my code. It was not terrible, but it was my first time having to do this because of a third party API.',
		tools: ['HTML/CSS', 'Javascript', 'Twitch API'],
		image: twitch,
		link: 'http://chuckreynolds.tech/twitch/index.html'
	},
	leaderboard: {
		title: 'Free Code Camp Leaderboard',
		info:
			'The FreeCodeCamp API was really easy to use. The hardest part of this project was figuring out how to reorganize my data when a client would click on ' +
			'a column.',
		tools: ['HTML/CSS', 'Javascript', 'FreeCodeCamp API'],
		image: leaderboard,
		link: 'http://chuckreynolds.tech/leaderboard/index.html'
	},
	gdp: {
		title: 'US Gross Domestic Product',
		info:
			'This was my first project with D3. The hardest part of this project was understanding D3, specifically data binding, syntax, and styling.',
		tools: ['HTML/CSS', 'Javascript', 'D3.js'],
		image: gdp,
		link: 'http://chuckreynolds.tech/gdp/index.html'
	},
	heatmap: {
		title: 'Surface Temperture',
		info:
			'This style of heatmap was a little difficult to implement. Getting all the data into the view and in order proved to be quite difficult.',
		tools: ['HTML/CSS', 'Javascript', 'D3.js'],
		image: heatmap,
		link: 'http://chuckreynolds.tech/heatmap/index.html'
	},
	force: {
		title: 'National Contiguity',
		info:
			'Force maps are fun to look at but a bit hard to code. I had to look at a lot of example code and stack overflow was my friend with this one.' +
			' Overall a great project to complete and learn from.',
		tools: ['HTML/CSS', 'Javascript', 'D3.js'],
		image: force,
		link: 'http://chuckreynolds.tech/force/index.html'
	},
	scatterplot: {
		title: 'Professional Bicycle Racing Doping',
		info:
			'This project was a step up from my US Gross Domestic Product project. The hardest part here was instead of building a graph from left to right and bottom to top,' +
			' I had to reverse that and build right to left and top to bottom. It took sometime to figure this out but really helped in my understanding of D3.',
		tools: ['HTML/CSS', 'Javascript', 'D3.js'],
		image: scatterplot,
		link: 'http://chuckreynolds.tech/scatterplot/index.html'
	},
	games: {
		title: 'Game Search',
		info:
			'This was my first real project using Node.js/Express.js. I really wanted to push my knowledge further by creating a full stack app.',
		tools: ['HTML/CSS', 'Javascript', 'Node.js/Express.js', 'PUG', 'MongoDB'],
		image: games,
		link: 'https://mighty-woodland-65549.herokuapp.com/'
	},
	timestamp: {
		title: 'Timestamp Service',
		info:
			'This is nifty tool to convert a unix timestamp to human-readable date and vice-versa. I started to code this from stratch using the date object. There were so many edge' +
			" cases I couldn't keep up, so I decided to use a utility library called Moment.js. If you have not used or do not know about Moment.js, it's definitely worth checking out.",
		tools: ['HTML/CSS', 'Javascript', 'Node.js/Express.js', 'Moment.js', 'PUG'],
		image: timestamp,
		link: 'https://timestamp-express.herokuapp.com/'
	}
};
