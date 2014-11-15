/**
 * @jsx React.DOM
 */

var React = require('react'),
	KudosKen = require('./kudos');

React.render(<KudosKen interval="1500" />, document.getElementById('example'));