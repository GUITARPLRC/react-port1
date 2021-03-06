import movie from '../images/movie.jpg';
import dungeon from '../images/dungeon.jpg';
import rect from '../images/rect.jpg';
import gameoflife from '../images/gameoflife.jpg';
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
		link: 'http://chuckreynolds.tech/movie/index.html',
		github: 'new-react-movies'
	},
	dungeon: {
		title: 'Dungeon of Doom',
		info:
			'My second project working with Redux. This was my first time implementing a game, so figuring out how the board,' +
			' player, enemies, items are all relational to each other was really hard to comprehend. In the end, this really pushed my skills ' +
			'and knowledge of Redux, game design, and computational thinking about how things are related within a structure.',
		tools: ['HTML/CSS', 'React', 'Redux'],
		image: dungeon,
		link: 'http://chuckreynolds.tech/dungeon/index.html',
		github: 'rogue'
	},
	rect: {
		title: 'Create A Layout',
		info: 'This is a great tool to visual a layout design and add layering.',
		tools: ['HTML/CSS', 'Bootstrap', 'React', 'React-RND'],
		image: rect,
		link: 'http://guitarplrc.github.io/rect-proj2',
		github: 'rect-proj2'
	},
	gameoflife: {
		title: "Conway's Game of Life",
		info:
			'This was my first project using Redux. The Flux/Redux concept was not really hard to understand, but implementing the concept proved to ' +
			'be the hard part. One issue I ran into, with this project, was deep cloning an object to reference as previous state, but I quickly found a way to do this.',
		tools: ['HTML/CSS', 'React', 'Redux'],
		image: gameoflife,
		link: 'http://chuckreynolds.tech/gameoflife/index.html',
		github: 'game_of_life'
	},
	gdp: {
		title: 'US Gross Domestic Product',
		info:
			'This was my first project with D3. The hardest part of this project was understanding D3, specifically data binding, syntax, and styling.',
		tools: ['HTML/CSS', 'Javascript', 'D3.js'],
		image: gdp,
		link: 'http://chuckreynolds.tech/gdp/index.html',
		github: 'gdp'
	},
	heatmap: {
		title: 'Surface Temperture',
		info:
			'This style of heatmap was a little difficult to implement. Getting all the data into the view and in order proved to be quite difficult.',
		tools: ['HTML/CSS', 'Javascript', 'D3.js'],
		image: heatmap,
		link: 'http://chuckreynolds.tech/heatmap/index.html',
		github: 'd3-heatmap'
	},
	force: {
		title: 'National Contiguity',
		info:
			'Force maps are fun to look at but a bit hard to code. I had to look at a lot of example code and stack overflow was my friend with this one.' +
			' Overall a great project to complete and learn from.',
		tools: ['HTML/CSS', 'Javascript', 'D3.js'],
		image: force,
		link: 'http://chuckreynolds.tech/force/index.html',
		github: 'force'
	},
	scatterplot: {
		title: 'Professional Bicycle Racing Doping',
		info:
			'This project was a step up from my US Gross Domestic Product project. The hardest part here was instead of building a graph from left to right and bottom to top,' +
			' I had to reverse that and build right to left and top to bottom. It took sometime to figure this out but really helped in my understanding of D3.',
		tools: ['HTML/CSS', 'Javascript', 'D3.js'],
		image: scatterplot,
		link: 'http://chuckreynolds.tech/scatterplot/index.html',
		github: 'scatterplot'
	},
	games: {
		title: 'Game Search',
		info:
			'This was my first real project using Node.js/Express.js. I really wanted to push my knowledge further by creating a full stack app.',
		tools: ['HTML/CSS', 'Javascript', 'Node.js/Express.js', 'PUG', 'MongoDB'],
		image: games,
		link: 'https://mighty-woodland-65549.herokuapp.com/',
		github: 'games'
	},
	timestamp: {
		title: 'Timestamp Service',
		info:
			'This is nifty tool to convert a unix timestamp to human-readable date and vice-versa. I started to code this from stratch using the date object. There were so many edge' +
			" cases I couldn't keep up, so I decided to use a utility library called Moment.js. If you have not used or do not know about Moment.js, it's definitely worth checking out.",
		tools: ['HTML/CSS', 'Javascript', 'Node.js/Express.js', 'Moment.js', 'PUG'],
		image: timestamp,
		link: 'https://timestamp-express.herokuapp.com/',
		github: 'timestamp'
	}
};
