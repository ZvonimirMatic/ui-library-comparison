import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { initializeIcons, mergeStyles } from '@fluentui/react';

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

initializeIcons();

// eslint-disable-next-line no-restricted-globals
ReactDOM.render(<App />, document.getElementById('root'));
