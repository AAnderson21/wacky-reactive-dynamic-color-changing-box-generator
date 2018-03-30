import React from 'react';

const red = '#ff0000';
const orange = '#ffa500';
const green = '#008000';
const yellow = '#ffff00';
const blue = '#0000ff';
const indigo = '#4b0082';
const violet = '#ee82ee';
const brick = '#a0001e'
const colorArr = [red, orange, green, yellow, blue, indigo, violet];

const randomColor = () => {
    const index = Math.floor(Math.random() * 7);
    return colorArr[index];
}


const Box = (props) => {
    
    
        return <div style={{
            backgroundColor:  randomColor(), 
            width: '60px', //50
            height: '60px', // 50
            display: 'flex',
            flexDirection: 'row', //row
            flexWrap: 'wrap',
            borderRadius: '5%',
            border: '1px solid white',
            boxSizing: 'border-box',
            fontSize: '1.2em',
            margin: '5px'
            }}> 
        </div>

        }
export default Box;