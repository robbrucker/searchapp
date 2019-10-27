import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import './search_input/SearchInput.css';
import Background from './background/Background';
import SearchInput from './search_input/SearchInput';

export default class MainWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || '',
      error: props.error || '',
      label: props.label || 'Start Typing here',
      background: '',
      apiResults: '',
    };
    this.handleInputThrottled = debounce(val => {
      this.callApi(val);
    }, 1000);
  }

  callApi(event) {
    this.setState({ background: event });
    console.log('Secondary event ', event);
    let url = process.env.REACT_APP_LISTEN_URL;
    const myHeaders = new Headers();
    const headerName = process.env.REACT_APP_API_KEY_TOKEN;
    myHeaders.append(
      process.env.REACT_APP_API_KEY_TOKEN,
      process.env.REACT_APP_API_KEY_VALUE
    );
    fetch(url + '/search?q=' + event, { headers: myHeaders })
      .then(results => results.clone().json())
      .then(data => {
        this.setState({ apiResults: data });
        console.log('state', this.state.apiResults);
      });
    console.log('It mounted');
  }

  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      'active'} ${locked && !active && 'locked'}`;

    return (
      <div className={fieldClassName}>
        {active && value && predicted && predicted.includes(value) && (
          <p className="predicted">{predicted}</p>
        )}
        <SearchInput
          handleInputThrottled={this.handleInputThrottled}
          value={value}
          label={label}
          locked={locked}
          active={active}
          predicted={predicted}
          error={error}
        ></SearchInput>
        <label htmlFor={1} className={error && 'error'}>
          {error || label}
        </label>
        <label>{value}</label>
        <Background
          background={this.state.background}
          apiResults={this.state.apiResults}
        ></Background>
      </div>
    );
  }
}
