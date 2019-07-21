import React from 'react';

export class WindowWidth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
        this.onWindowResize = this.onWindowResize.bind(this); // manually bind this
    }

    onWindowResize(event) {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
        // should have exactly same params as addEventListener!
    }

    render() {
        return (<div>Window width: {this.state.windowWidth} </div>);
    }
}