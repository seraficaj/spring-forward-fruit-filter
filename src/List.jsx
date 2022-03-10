import React, { Component } from "react";

class List extends Component {
    render() {
        // create a list of fruits from props
        const fruitListItems = this.props.fruits.map((fruit, idx) => {
            return <li key={idx}>{fruit}</li>;
        });

        const removedItems = this.props.removed.map((fruit, idx) => {
            return <li key={idx}>{fruit}</li>;
        });
        return (
            <>
                <h2>Fruits List</h2>
                <ul>{fruitListItems}</ul>
                <h2>Filtered Out Fruits</h2>
                <ul>{removedItems}</ul>
            </>
        );
    }
}

export default List;
