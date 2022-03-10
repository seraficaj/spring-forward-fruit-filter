import React, { Component } from 'react';
import Input from './Input';
import List from './List';

const defaultFruits = ["kumquat", "watermelon", "kiwi", "cantaloupe"]

class FruitContainer extends Component {
    // state managed here for Input and List components
    state = { 
        fruitsToDisplay: defaultFruits, // fruits to show in List
        inputFilterValue: '' // input data from Input
     } 
    render() { 
        return (
            <>
                <Input />
                <List 
                    fruits={this.state.fruitsToDisplay}
                />
            </>
        );
    }
}
 
export default FruitContainer;