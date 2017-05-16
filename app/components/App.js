var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

import mui from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Nav = require('./Nav');
var Home = require('./Home');
var Projects = require('./Projects');
var ProjectDetails = require('./ProjectDetails');
var Contact = require('./Contact');

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<MuiThemeProvider>
						<div className='app'>
							<Nav />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/projects' component={Projects} />
								<Route path='/projects/details' component={ProjectDetails} />
								<Route path='/contact' component={Contact} />
								<Route render={function() {
									return (
										<div>
											<p>404: Not Found</p>
											<p>Please click on a link or enter a valid url</p>
										</div>
									)
								}} />
							</Switch>
						</div>
					</MuiThemeProvider>
				</div>
			</Router>
		)
	}
}

module.exports = App;
