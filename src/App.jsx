import React from 'react';

export const App = () => {
  const currentYear = new Date().getFullYear();

  return React.createElement(
    'div',
	{ className: 'currentYear' },

    React.createElement(
      'p',
      null,
       `${currentYear}`
    )
  );
};
