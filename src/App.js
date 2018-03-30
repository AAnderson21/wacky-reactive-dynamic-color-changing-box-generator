import React, { Component } from 'react';
import './App.css';
import Box from './components/Box';
import DivList from './components/DivList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      divArr: [],
      decrement: false
    }
  }
// 256
 interval = () => {
  const interval = setInterval( () => {
    let count = this.state.count;
    let newCount;
    if (count === 156) this.setState({ decrement: true });
    else if (count === 0) this.setState({ decrement: false }); 
    if (this.state.decrement) newCount = count - 1;
    else if (!this.state.decrement) newCount = count + 1;
    this.setState({ count: newCount });
    }, 40);
  }

  componentDidMount () {
    this.interval();
  }

  updateDivArr = () => {
    let arr = this.state.divArr;
    for (let i = 0; i < this.state.count; i++) {
      if (arr.length < this.state.count) arr.push(i);
      else if (arr.length > this.state.count) arr.pop(i);
    }
    return arr;
  }

  render() {
     
    return (
      <div className="App" style={{backgroundColor: 'black', width: '800px', margin: 'auto'}}>
        <DivList 
        updateDivArr={this.updateDivArr} 
        divArr={this.state.divArr} />  
      </div>
    );
  }
}

export default App;
