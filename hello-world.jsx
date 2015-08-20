import React from 'react';

class Button extends React.Component {
  handleClick() {
    this.props.onClick()
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Roll Again</button>
    )
  }
}

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
        <Button onClick={this.roll.bind(this)}/>
      </div>
    )
  }
};

export default HelloWorld;
