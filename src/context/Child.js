import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {

	static contextTypes = {
		text: PropTypes.string
	};

	render() {
		return (<div>{"CHILD -> " + this.context.text}</div>);
	};
}

export { Child };