import React from 'react';
import Box from './Box';

const Incrementer = (props) => {
    let arr = new Array(
        parseFloat(props.count)
    );
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i;
    }
    return this.setState({ divArr: [...arr]});
};

export default Incrementer;