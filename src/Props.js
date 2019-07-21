import React from 'react';

export class Props extends React.Component {

	render() {
		// this.props.value = 1;
		return (
			<div>
				<div>"props.value: " {this.props.value}</div>
				<div>"props.children: " {this.props.children}</div>
			</div>
		)
	}
}