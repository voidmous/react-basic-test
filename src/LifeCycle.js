import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    console.log('constructor()');
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  getInitialState() {
    console.log('getInitialState()');
    return { windowWidth: window.innerWidth };
  }
  onWindowResize(e) {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    return (<div>Life Cycle Data </div>);
  }
}

export class LifeCycleWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { warpTag: 'div' };
  }
  changeWrapTag = (tag) => () => {
    if (tag === 'div') {
      this.setState({ warpTag: 'div' });
    } else {
      this.setState({ warpTag: 'span' });
    }
  }
  render() {
    const { warpTag } = this.state;

    return (
      <div>
        <input type='button' value='div' onClick={this.changeWrapTag('div')}></input>
        <input type='button' value='span' onClick={this.changeWrapTag('span')}></input>
        {warpTag === 'div' ? (<div><LifeCycle /></div>) : (<span><LifeCycle /></span>)}
      </div>
    );
  }
}