import React from 'react';
import ReactDOM from 'react-dom';

export class UseRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value }, () => {
      console.log('handleChange ' + JSON.stringify(this.state));
    });
  }

  clearAndFocusInput = () => {
    this.setState({ userInput: '' }, () => { // callback function
      console.log('ref theInput');
      window.theInput = ReactDOM.findDOMNode(this.refs.theInput);
      ReactDOM.findDOMNode(this.refs.theInput).focus();
      // this.refs.theInput.getDOMNode().focus(); // old style: before react v0.14

      // console.log('ref callback theInput');
      // window.theInput = this.theInput;
      // this.theInput.focus();
    });
  }

  render() {
    return (
      <div>
        <input
          type='button'
          onClick={this.clearAndFocusInput}
          value='Click to focus and clear'
        />
        <br />
        <input
          ref='theInput'
          // ref={(compInstance) => {this.theInput = compInstance;}}
          value={this.state.userInput}
          onChange={this.handleChange}
        />
      </div>);
  }
}