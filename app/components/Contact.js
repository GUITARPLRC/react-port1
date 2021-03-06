import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			message: '',
			bot: '',
			status: false,
			statusText: '',
			statusFontColor: 'green'
		};
	}

	componentDidMount() {
		setTimeout(() => {
			const el = document.querySelector('.contact');
			el.style.transition = 'opacity 1s';
			el.style.opacity = 1;
		}, 200);
	}

	componentWillUnmount() {
		const el = document.querySelector('.contact');
		el.style.transition = 'opacity 1s';
		el.style.opacity = 0;
	}

	onSubmit = e => {
		e.preventDefault();

		if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
			this.setState({
				status: true,
				statusText: '* Please fill out form completely',
				statusFontColor: 'red'
			});

			if (this.state.name === '') {
				document.getElementById('name').focus();
			} else if (this.state.email === '') {
				document.getElementById('email').focus();
			} else if (this.state.message === '') {
				document.getElementById('message').focus();
			}

			return;
		}

		if (
			!this.state.email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			this.setState({
				status: true,
				statusText: '* Please enter a valid email',
				statusFontColor: 'red'
			});
			document.getElementById('email').focus();
			return;
		}

		if (this.state.bot !== 3) {
			this.setState({
				status: true,
				statusText: '* I think your answer is wrong...',
				statusFontColor: 'red'
			});
			document.getElementById('bot').focus();
			return;
		}

		const xhr = new XMLHttpRequest();

		xhr.open('POST', './mail.php');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onreadystatechange = function() {
			if (xhr.status !== 200) {
				this.setState({
					status: true,
					statusText: '* Oops! There has been an error! Please try again.',
					statusFontColor: 'red'
				});
				return;
			}

			const response = JSON.parse(xhr.responseText);

			if (response.message === 0) {
				this.setState({
					status: true,
					statusText: '* Oops! There has been an error! Please try again.',
					statusFontColor: 'red'
				});
				return console.log(response.error);
			}
		};

		this.setState({
			status: true,
			statusText: 'Thank you! I will be in contact shortly!',
			statusFontColor: 'green'
		});

		const data = `name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`;

		xhr.send(data);

		this.setState({ name: '', email: '', message: '', bot: '' });
	};

	handleName = e => {
		this.setState({ name: e.target.value });
	};

	handleEmail = e => {
		this.setState({ email: e.target.value });
	};

	handleMessage = e => {
		this.setState({ message: e.target.value });
	};

	handleBot = e => {
		this.setState({ bot: Number(e.target.value) });
	};

	render() {
		return (
			<Paper zDepth={5} className="contact">
				<h2>Get In Touch</h2>
				<p>Interested in working together? Just want to say 'hi'? Fill out the form below</p>
				{this.state.status && (
					<p style={{ color: this.state.statusFontColor, fontWeight: 600 }}>{this.state.statusText}</p>
				)}
				<TextField
					id="name"
					name="name"
					floatingLabelText="Name"
					onChange={this.handleName}
					value={this.state.name}
					style={{ width: '90%' }}
				/>
				<br />
				<TextField
					id="email"
					name="email"
					floatingLabelText="Email"
					onChange={this.handleEmail}
					value={this.state.email}
					style={{ width: '90%' }}
				/>
				<br />
				<TextField
					id="message"
					name="message"
					floatingLabelText="Say Something"
					multiLine
					onChange={this.handleMessage}
					value={this.state.message}
					style={{ width: '90%' }}
				/>
				<br />
				<TextField
					id="bot"
					floatingLabelText="What is 1 + 2?"
					onChange={this.handleBot}
					value={this.state.bot}
					style={{ width: '90%' }}
				/>
				<br />
				<RaisedButton label="Send" primary onClick={this.onSubmit} />
			</Paper>
		);
	}
}

module.exports = Contact;
