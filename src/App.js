import React, { Component, useState } from 'react';
import './App.css';
import { render } from '@testing-library/react';




class App extends Component {
  constructor(){
    super();
    this.state = {
        counter: 0
    }
  }
  upVote = () => {
      const addToVote = this.state.counter;
      this.setState({
          counter: addToVote + 1,
      })
  }
  downVote = () => {
    const downVote = this.state.counter;
    this.setState({
        counter: downVote - 1,
    })
}
  fizzBuzz = () => {
    if (this.state.counter % 3 === 0) {
      return 'fizz';
    } else if (this.state.counter % 5 === 0) {
      return 'buzz';
    } else if (this.state.counter % 3 === 0 && this.state.counter % 5 === 0) {
      return 'fizzbuzz';
    }
  }

  render() {
    return (
        <div>
           <p>Number: {this.state.counter}</p>
           {this.state.counter % 3 === 0 ? <p>fizz</p> : null}
           {this.state.counter % 5 === 0 ? <p>buzz</p> : null}
           {this.state.counter % 3 === 0 && this.state.counter % 5 === 0 ? <p>fizzbuzz</p> : null}
           

            <button onClick={this.upVote}>upVote</button>
            <button onClick={this.downVote}>downVote</button>
        </div>
    ) 
  }
}





export default App;
