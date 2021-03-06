import React, { Component } from "react";
import Input from "./Input";
import List from "./List";

const defaultFruits = ["kumquat", "watermelon", "kiwi", "cantaloupe"];

class FruitContainer extends Component {
    // state managed here for Input and List components
    state = {
        fruitsToDisplay: defaultFruits, // fruits to show in List
        inputFilterValue: "", // input data from Input
        fruitsFilteredOut: [],
    };

    // this method is drilled down to Input
    handleFilterChange = (e) => {
        e.preventDefault();
        const filteredFruitsList = defaultFruits.filter((fruit) => {
            return fruit.toLowerCase().includes(e.target.value.toLowerCase());
        });
        const removedFruitsList = defaultFruits.filter((fruit) => {
            return !fruit.toLowerCase().includes(e.target.value.toLowerCase());
        });
        this.setState({
            inputFilterValue: e.target.value,
            fruitsToDisplay: filteredFruitsList,
            fruitsFilteredOut: removedFruitsList,
        });
    };

    render() {
        return (
            <>
                <Input
                    handleFilterChange={this.handleFilterChange}
                    value={this.state.inputFilterValue}
                />
                <List
                    fruits={this.state.fruitsToDisplay}
                    removed={this.state.fruitsFilteredOut}
                />
            </>
        );
    }
}

export default FruitContainer;
