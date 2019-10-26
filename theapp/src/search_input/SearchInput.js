import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce'
import './SearchInput.css';

export default class SearchInput extends Component {
    handleInput = evt => {
        console.log("What is this ? ", evt);
        // const value = evt.target.value;
        // this.setState({ results: value });

    }
    constructor(props) {
        super(props);

        this.state = {
            active: (props.locked && props.active) || false,
            value: props.value || "",
            error: props.error || "",
            label: props.label || "Label"
        };

        this.handleInputThrottled = debounce((val) => {
            console.log("Whats the val? ", val);
            this.setState({ val, error: "" });
            }, 1000);
    }



    changeValue(event) {
        const value = event.target.value;

        this.setState({ value, error: "" });
        return debounce((val) => { console.log("Whats the val? ", val); }, 1000);
    }

    handleDebounce(value) {
        console.log("The new value is ", value);
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

                    onChange={e=>{this.setState({value: e.target.value}); this.handleInputThrottled(e.target.value)}}
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