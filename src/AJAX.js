import React from 'react';
import $ from 'jquery';

export class AJAX extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', lastGistUrl: '' };
    }

    componentDidMount() {
        $.get(this.props.source, (result) => {
            const lastGist = result[0];
            console.log('ajax get lastGist ', lastGist);
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        });
    }

    render() {
        return (<div>{this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>. </div>);
    }
}