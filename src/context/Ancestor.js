import React from 'react';
import PropTypes from 'prop-types';

class Ancestor extends React.Component {
	static childContextTypes = {
		text: PropTypes.string
	};

	getChildContext() {
		return { text: 'This is ancestor' };
	};

	render() {
		return (
			<span>{"ANCESTOR -> "}{this.props.children}</span>
		);
	};
};

export { Ancestor };