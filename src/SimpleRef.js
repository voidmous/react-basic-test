import React from 'react';
import ReactDOM from 'react-dom';

class SimpleRef extends React.Component {
	constructor(props) {
		super(props);
		setTimeout(() => {
			console.log(this.nameInput.value);
			this.nameInput.focus(); // focus on text input
			window.inputDOM = ReactDOM.findDOMNode(this.nameInput);
		}, 8000); // read input text after 8s
	}

	render() {
		// ref callback will be triggered after 
		// componentDidMount and componentDidUpdate
		return (
			<input ref={(input) => this.nameInput = input} type="text" />
		);
	}
}
export { SimpleRef };