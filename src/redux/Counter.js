import React from 'react';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}



class Counter extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = { count: 0};
	// }

	increment = () => {
		this.props.dispatch({ type: 'INCREMENT'});
		// this.setState({
		// 	count: this.state.count + 1
		// });
	}

	decrement = () => {
		this.props.dispatch({ type: 'DECREMENT'});
		// this.setState({
		// 	count: this.state.count - 1
		// });
	}

	render() {
		return (
			<div>
				<h3>Counter</h3>
				<div>
					<button onClick={this.decrement}> - </button>
					<span>{this.props.count}</span>
					<button onClick={this.increment}> + </button>
				</div>
			</div>
		)
	}
}

// export { Counter };
export default connect(mapStateToProps)(Counter);