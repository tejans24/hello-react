import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = { num: this.getRandomNumber() }
  }

  getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  }

  roll() {
    this.setState({ num: this.getRandomNumber() })
  }

  render() {
    return (
      <div>
        <p>Your roll was: {this.state.num}</p>
        <button onClick={this.roll.bind(this)}>Roll Again</button>
      </div>
    )
  }
};

export default HelloWorld;
