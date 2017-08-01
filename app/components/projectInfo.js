import movie from '../images/movie.jpg';
import markdown from '../images/markdown.jpg';
import recipe from '../images/recipe.jpg';
import gameoflife from '../images/gameoflife.jpg';
import music from '../images/music.jpg';
import quiz from '../images/quiz.jpg';
import magic from '../images/magic8.png';
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
	markdown: {
		title: "Markdown Preview",
		info: "I completed this project as part of the Free Code Camp curriculum. This was the first time using the Marked.js library.",
		tools: ["HTML/CSS", "Marked.js", "React"],
		image: markdown
	},
	recipe: {
		title: "Recipe List",
		info: "This was my first project with React and was part of the Free Code Camp curriculum. Since it was my first time using React, the hardest" +
			" part was the whole project. Learning about data-flow, state, ...everything.",
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
			" I also wanted to make a site that my toddler could have fun with. Creating 'pre-built' songs was the hardest part for me and creating a timing feature for the notes.",
		tools: ["HTML/CSS", "Javascript"],
		image: music
	},
	quiz: {
		title: "Quiz",
		info: "This was a tough one because it was one of my first javascript projects ever. Understanding how local storage is used, creating a question and answer object," +
		" and checking if the answer was correct gave me the most problems. Seems so simple now.",
		tools: ["HTML/CSS", "Javascript"],
		image: quiz
	},
	magic: {
		title: "Magic 8-ball",
		info: "",
		tools: ["HTML/CSS", "Javascript"],
		image: magic
	},
	hangman: {
		title: "Word Guess",
		info: "",
		tools: ["HTML/CSS", "Javascript"],
		image: hangman
	},
	wiki: {
		title: "Wiki Search",
		info: "",
		tools: ["HTML/CSS", "Javascript", "Wikimedia API"],
		image: wiki
	},
	weather: {
		title: "Local Weather",
		info: "",
		tools: ["HTML/CSS", "Javascript", "OpenWeather API"],
		image: weather
	},
	twitch: {
		title: "Twitch Channels",
		info: "",
		tools: ["HTML/CSS", "Javascript", "Twitch API"],
		image: twitch
	},
	leaderboard: {
		title: "Free Code Camp Leaderboard",
		info: "",
		tools: ["HTML/CSS", "Javascript", "FreeCodeCamp API"],
		image: leaderboard
	},
	gdp: {
		title: "US Gross Domestic Product",
		info: "This was my first project with D3. The hardest part was understanding D3, specifically data binding and styling.",
		tools: ["HTML/CSS", "Javascript", "D3.js"],
		image: gdp
	},
	heatmap: {
		title: "Surface Temperture",
		info: "",
		tools: ["HTML/CSS", "Javascript", "D3.js"],
		image: heatmap
	},
	force: {
		title: "National Contiguity",
		info: "",
		tools: ["HTML/CSS", "Javascript", "D3.js"],
		image: force
	},
	scatterplot: {
		title: "Professional Bicycle Racing Doping",
		info: "",
		tools: ["HTML/CSS", "Javascript", "D3.js"],
		image: scatterplot
	}
}
