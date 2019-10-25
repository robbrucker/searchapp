import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce'
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

    changeValue(event) {
        const value = event.target.value;
        console.log("The new value is ", value);
        this.setState({ value, error: "" });
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            this.setState({ value: this.props.predicted });
        }
    }

    render() {
        const { active, value, error, label } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
        "active"} ${locked && !active && "locked"}`;

        return (
            <div className={fieldClassName}>
                {active &&
                value &&
                predicted &&
                predicted.includes(value) && <p className="predicted">{predicted}</p>}
                <input
                    id={1}
                    type="text"
                    value={value}
                    placeholder={label}
                    onChange={this.changeValue.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                />
                <label htmlFor={1} className={error && "error"}>
                    {error || label}
                </label>
                <label>{value}</label>
            </div>
        );
    }
}