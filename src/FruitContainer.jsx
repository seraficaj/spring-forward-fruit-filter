import React, { Component } from 'react';
import Input from './Input';
import List from './List';

class FruitContainer extends Component {
    // state managed here for Input and List components
    state = {  } 
    render() { 
        return (
            <>
                <Input />
                <List />
            </>
        );
    }
}
 
export default FruitContainer;