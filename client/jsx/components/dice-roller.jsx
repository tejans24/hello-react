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

class Info extends React.Component {
  render() {
    return (
      <p>Your roll was: {this.props.num}!</p>
    )
  }
}

class DiceRoller extends React.Component {
  render() {
    return (
      <div>
        <Info num={this.props.num}/>
        <Button onClick={this.props.onRoll}/>
      </div>
    )
  }
};

export default DiceRoller;
