var React = require('react');

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function Contact() {
		return (
			<Paper zDepth={5} style={{margin:'10% auto 0 auto', padding:50, width:'60%'}}>
				<h2>Get In Touch</h2>
				<p>Interested in working together? Just want to say 'hi'? Fill out the form below</p>
				<TextField floatingLabelText="Name" />
				<br />
				<TextField floatingLabelText="Email" />
				<br />
				<TextField floatingLabelText="Say Something" multiLine={true} rows={2} />
				<br />
				<RaisedButton label="Send" primary={true} />
			</Paper>
		)
}

module.exports = Contact
