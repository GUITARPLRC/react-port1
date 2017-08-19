import movie from '../images/movie.jpg';
import dungeon from '../images/dungeon.jpg';
import recipe from '../images/recipe.jpg';
import gameoflife from '../images/gameoflife.jpg';
import music from '../images/music.jpg';
import quiz from '../images/quiz.jpg';
import magic from '../images/magic8.jpg';
import hangman from '../images/hangman.jpg';
import wiki from '../images/wiki.jpg';
import weather from '../images/weather.jpg';
import twitch from '../images/twitch.jpg';
import leaderboard from '../images/leaderboard.jpg';
import gdp from '../images/US_GDP.jpg';
import heatmap from '../images/heatmap.jpg';
import force from '../images/force.jpg';
import scatterplot from '../images/scatterplot.jpg';

module.exports = {
	movie: {
		title: "Movie Search",
		info: "This was one of my first projects with React and has since went through several changes.",
		tools: ["HTML/CSS", "React"],
		image: movie
	},
	dungeon: {
		title: "Dungeon of Doom",
		info: "My second project working with Redux. This was my first time implementing a game, so figuring out how the board," +
			" player, enemies, items are all relational to each other was really hard to comprehend. In the end, this really pushed my skills " +
			"and knowledge of Redux, game design, and computational thinking about how things are related within a structure.",
		tools: ["HTML/CSS", "React", "Redux"],
		image: dungeon
	},
	recipe: {
		title: "Recipe List",
		info: "This was my first project with React and was part of the Free Code Camp curriculum. Since it was my first time using React, the hardest" +
			" part was the whole project. Learning about data-flow, data-binding, state, ...everything.",
		tools: ["HTML/CSS", "Javascript (local storage)", "React"],
		image: recipe
	},
	gameoflife: {
		title: "Conway's Game of Life",
		info: "This was my first project using Redux. The Flux/Redux concept was not really hard to understand, but implementing the concept proved to " +
			"be the hard part. One issue I ran into, with this project, was deep cloning an object to reference as previous state, but I quickly found a way to do this.",
		tools: ["HTML/CSS", "React", "Redux"],
		image: gameoflife
	},
	music: {
		title: "Music Maker",
		info: "I came up with this idea while looking around for projects in javascript. When I saw this idea, I wanted to create it and make it my own." +
			" I also wanted to make a site that my toddler could have fun with. Creating 'pre-built' songs and adding a timing feature for the notes in the songs was the hardest part for me.",
		tools: ["HTML/CSS", "Javascript"],
		image: music
	},
	quiz: {
		title: "Quiz",
		info: "This was a tough one because it was one of my first javascript project. Understanding how local storage is used, creating a question and answer object," +
		" and checking if the answer was correct gave me the most problems. Seems so simple now.",
		tools: ["HTML/CSS", "Javascript"],
		image: quiz
	},
	magic: {
		title: "Magic 8-ball",
		info: "Simple app showing predetermined answers to client questions when submitted. This really tested my skills in CSS.",
		tools: ["HTML/CSS", "Javascript"],
		image: magic
	},
	hangman: {
		title: "Word Guess",
		info: "One of my first first javascript projects. The hardest part at the time, was picking a word not showing any letters until the client pick it.",
		tools: ["HTML/CSS", "Javascript"],
		image: hangman
	},
	wiki: {
		title: "Wiki Search",
		info: "A great project to work with the Wikimedia API for the first time. The API is not the easiest to understand but overall the documentation " +
			"is decent and helped a lot.",
		tools: ["HTML/CSS", "Javascript", "Wikimedia API"],
		image: wiki
	},
	weather: {
		title: "Local Weather",
		info: "At first I was using local location API to get a client's location in order to serve the weather report. That soon proved to be a nusance. " +
			"I then resorted to using Google location services to get better support for all clients.",
		tools: ["HTML/CSS", "Javascript", "OpenWeather API"],
		image: weather
	},
	twitch: {
		title: "Twitch Channels",
		info: "The Twitch API was another hard one to work with. Halfway through the project they changed their endpoints and data structure which meant I had to " +
			"refactor my code. It was not terrible, but it was my first time having to do this because of a third party API.",
		tools: ["HTML/CSS", "Javascript", "Twitch API"],
		image: twitch
	},
	leaderboard: {
		title: "Free Code Camp Leaderboard",
		info: "The FreeCodeCamp API was really easy to use. The hardest part of this project was figuring out how to reorganize my data when a client would click on " +
			"a column.",
		tools: ["HTML/CSS", "Javascript", "FreeCodeCamp API"],
		image: leaderboard
	},
	gdp: {
		title: "US Gross Domestic Product",
		info: "This was my first project with D3. The hardest part of this project was understanding D3, specifically data binding, syntax, and styling.",
		tools: ["HTML/CSS", "Javascript", "D3.js"],
		image: gdp
	},
	heatmap: {
		title: "Surface Temperture",
		info: "This style of heatmap was a little difficult to implement. Getting all the data into the view and in order proved to be quite difficult.",
		tools: ["HTML/CSS", "Javascript", "D3.js"],
		image: heatmap
	},
	force: {
		title: "National Contiguity",
		info: "Force maps are fun to look at but a bit hard to code. I had to look at a lot of example code and stack overflow was my friend with this one." +
			" Overall a great project to complete and learn from.",
		tools: ["HTML/CSS", "Javascript", "D3.js"],
		image: force
	},
	scatterplot: {
		title: "Professional Bicycle Racing Doping",
		info: "This project was a step up from my US Gross Domestic Product project. The hardest part here was instead of building a graph from left to right and bottom to top," +
			" I had to reverse that and build right to left and top to bottom. It took sometime to figure this out but really helped in my understanding of D3.",
		tools: ["HTML/CSS", "Javascript", "D3.js"],
		image: scatterplot
	}
}
