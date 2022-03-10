import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <>
                <label htmlFor="fruit-filter">filter fruits by name:</label>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.handleFilterChange}
                    id="fruit-filter"
                />
            </>
        );
    }
}

export default Input;
