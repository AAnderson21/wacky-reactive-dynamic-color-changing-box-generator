import React from 'react';
import Box from './Box';

const DivList = (props) => {
    const arr = new Array(props.count).fill(1);
    props.updateDivArr(...arr)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between', 
            maxWidth: '800px', //800
            margin: 'auto'
        }}>
            {props.divArr.map((el, i) => {
        return (
            <div>
                <Box color={i} key={i} />
            </div>
        );
    })}
        </div>
    );
};

export default DivList;