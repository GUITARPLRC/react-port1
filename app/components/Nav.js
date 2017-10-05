import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Drawer, MenuItem, IconButton } from 'material-ui';
import Menu from 'material-ui/svg-icons/navigation/menu';
import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from '../images/myLogo.jpg';

injectTapEventPlugin();

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleToggle() {
		this.setState({ open: !this.state.open });
	}

	handleClose() {
		this.setState({ open: false });
	}

	render() {
		return (
			<div>
				<AppBar
					onRightIconButtonTouchTap={this.handleToggle}
					style={{ backgroundColor: '#4f9a94' }}
					iconElementLeft={
						<a href="/">
							<img
								src={logo}
								alt="my logo"
								style={{
									borderRadius: 50,
									width: 50,
									height: 50,
									margin: '-2px 0 0 0'
								}}
							/>
						</a>
					}
					iconElementRight={
						<IconButton>
							<Menu />
						</IconButton>
					}
				/>
				<Drawer
					docked={false}
					width={150}
					open={this.state.open}
					openSecondary
					onRequestChange={open => this.setState({ open })}
				>
					<img src={logo} id="logo" alt="My Logo" />
					<NavLink exact to="/">
						<MenuItem onTouchTap={this.handleClose}>About</MenuItem>
					</NavLink>
					<NavLink to="/projects">
						<MenuItem onTouchTap={this.handleClose}>Projects</MenuItem>
					</NavLink>
					<NavLink to="/contact">
						<MenuItem onTouchTap={this.handleClose}>Contact</MenuItem>
					</NavLink>
					<div className="social">
						<a href="https://www.github.com/guitarplrc" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-2x fa-github-square" aria-hidden="true" />
						</a>
						<a href="https://www.linkedin.com/in/charles-reynolds-a41b53bb" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-2x fa-linkedin-square" aria-hidden="true" />
						</a>
						<a href="https://twitter.com/guitarplrc" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-2x fa-twitter-square" aria-hidden="true" />
						</a>
					</div>
				</Drawer>
			</div>
		);
	}
}

module.exports = Nav;
