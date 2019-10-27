import React, { Component } from 'react';
import './SearchInput.css';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: (props.locked && props.active) || false,
            value: props.value || "",
            error: props.error || "",
            label: props.label || "Label"
        };
    }

    render() {
        return (
           <input
                    id={1}
                    type="text"
                    value={this.value}
                    placeholder={this.props.label}
                    onChange={e=>{this.setState({value: e.target.value}); this.props.handleInputThrottled(e.target.value)}}
                    onFocus={() => !this.props.locked && this.setState({ active: true })}
                    onBlur={() => !this.props.locked && this.setState({ active: false })}
                />

        );
    }
}