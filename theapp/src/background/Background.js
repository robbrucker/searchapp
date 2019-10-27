import React, { Component } from 'react';
import './Background.css';

export default class Background extends Component {
  constructor(props) {
    const x = process.env.REACT_APP_LISTEN_URL;
    console.log('See the x ', x);
    super(props);

    this.state = {
      value: props.value || '',
    };
  }

  render() {
    let listItems;
    if (this.props.apiResults != '') {
      listItems = this.props.apiResults.results.map(result => (
        <span className={'listContainer'}>
          <li key={result.id}>
            {result.podcast_title_original}{' '}
            <img src={result.thumbnail} className={'imgResult'} />
          </li>
        </span>
      ));
    } else {
      listItems = 'Start typing to start searching';
    }

    return (
      <div className={'container2'}>
        <div className={'container1'}>
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}
