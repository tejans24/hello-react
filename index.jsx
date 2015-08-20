import React from 'react';
import DiceRoller from './dice-roller';

console.log(React.renderToStaticMarkup(<DiceRoller />));

React.render(
  <DiceRoller />,
  document.body
);
