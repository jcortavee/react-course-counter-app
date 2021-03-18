import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'

// ReactDOM.render(<PrimeraApp greeting='Hi, My name is Jose' />, document.getElementById('root'));
ReactDOM.render(<CounterApp value={14} />, document.getElementById('root'));