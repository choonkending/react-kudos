/**
 * @jsx React.DOM
 */

 var React = require('react');

 // From React.addons
 var ClassManipulationMixin = {
 	classSet: function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
 };

 var KudosKen = React.createClass({
 	mixins: [ClassManipulationMixin],
 	getInitialState: function(){
 		return {phase:''};
 	},
 	
 	phaseEnter: function(){
 		var id = -1,
 			_this = this;
 		if(this.state.phase !== 'finish'){
 			this.setState({phase:'active'});

 			id = setTimeout(function(){
 				_this.setState({phase:'finish', id: id});
 			}, this.props.interval);
 		}
 	},

 	phaseOut: function(){
 		if(this.state.phase !== 'finish'){
 			this.setState({phase:''});
 			clearTimeout(this.state.id);
 		}
 	},

 	render: function(){
 		return (
 			<div className={'kudos ' + this.state.phase} onMouseOver={this.phaseEnter} onMouseOut={this.phaseOut}></div>
 			
 		);
 	}
 });

 module.exports = KudosKen;