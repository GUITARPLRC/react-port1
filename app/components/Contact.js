var React = require('react');

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			message: ""
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		let xhr = new XMLHttpRequest();

		xhr.open('POST', './mail.php');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onreadystatechange = function() {
				if(xhr.status !== 200)
				{
						return alert("Oops! Something went wrong!");
				}

				var response = JSON.parse(xhr.responseText);

				if(response.message === 0)
				{
						return alert(response.error);
				}

				this.setState({name: "", email: "", message: ""});
				return alert("Message sent successfully!");
		};

		var data = `name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`;

		xhr.send(encodeURI(data));
	}
	handleName(e) {
		this.setState({name: e.target.value});
	}
	handleEmail(e) {
		this.setState({email: e.target.value});
	}
	handleMessage(e) {
		this.setState({message: e.target.value});
	}
	render() {
		return  (
			<Paper id="contact" zDepth={5}>
				<h2>Get In Touch</h2>
				<p>Interested in working together? Just want to say 'hi'? Fill out the form below</p>
				<TextField name='name' floatingLabelText="Name" onChange={this.handleName} value={this.state.name} />
				<br />
				<TextField name='email' floatingLabelText="Email" onChange={this.handleEmail} value={this.state.email} />
				<br />
				<TextField name='message' floatingLabelText="Say Something" multiLine={true} rows={2} onChange={this.handleMessage} value={this.state.message} />
				<br />
				<RaisedButton label="Send" primary={true} onClick={this.onSubmit} />
			</Paper>
		)
	}
}

module.exports = Contact
