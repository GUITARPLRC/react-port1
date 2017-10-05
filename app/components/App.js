import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Nav = require('./Nav');
const Home = require('./Home');
const Projects = require('./Projects');
const ProjectDetails = require('./ProjectDetails');
const Contact = require('./Contact');

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<MuiThemeProvider>
					<div className="app">
						<Nav />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/projects" component={Projects} />
							<Route path="/projects/details" component={ProjectDetails} />
							<Route path="/contact" component={Contact} />
							<Route
								render={function() {
									return (
										<div>
											<p>404: Not Found</p>
											<p>Please click on a link or enter a valid url</p>
										</div>
									);
								}}
							/>
						</Switch>
					</div>
				</MuiThemeProvider>
			</div>
		</BrowserRouter>
	);
}

module.exports = App;
