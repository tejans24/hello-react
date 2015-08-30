import React from 'react';
import { connect } from 'react-redux';

// component
import DiceRoller from '../../components/dice-roller';

// actions
import { roll } from '../actions/roller';

// binds state variables to props expected by the component
function mapStateToProps(state) {
  return {
    num: state.roller.num
  };
}

// and any actions expected as props by the component
function mapDispatchToProps(dispatch) {
  return {
    onRoll: () => dispatch(roll())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiceRoller);
