import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/myLogo.jpg';

import { AppBar, Drawer, MenuItem } from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
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
					onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
					style={{ backgroundColor: '#4f9a94' }}>
					<a href="/">
						<img
							src={logo}
							alt="my logo"
							style={{
								borderRadius: 50,
								width: 50,
								height: 50,
								margin: '5px 0 0 0'
							}}
						/>
					</a>
				</AppBar>
				<Drawer
					docked={false}
					width={150}
					open={this.state.open}
					onRequestChange={open => this.setState({ open })}>
					<img src={logo} id="logo" alt="My Logo" />
					<NavLink exact to="/">
						<MenuItem onTouchTap={this.handleClose.bind(this)}>About</MenuItem>
					</NavLink>
					<NavLink to="/projects">
						<MenuItem onTouchTap={this.handleClose.bind(this)}>
							Projects
						</MenuItem>
					</NavLink>
					<NavLink to="/contact">
						<MenuItem onTouchTap={this.handleClose.bind(this)}>
							Contact
						</MenuItem>
					</NavLink>
					<div className="social">
						<a
							href="https://www.github.com/guitarplrc"
							target="_blank"
							rel="noopener">
							<i className="fa fa-2x fa-github-square" aria-hidden="true" />
						</a>
						<a
							href="https://www.linkedin.com/in/charles-reynolds-a41b53bb"
							target="_blank"
							rel="noopener">
							<i className="fa fa-2x fa-linkedin-square" aria-hidden="true" />
						</a>
					</div>
				</Drawer>
			</div>
		);
	}
}

module.exports = Nav;
