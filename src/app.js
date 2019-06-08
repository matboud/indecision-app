import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testo');

ReactDOM.render(template, document.getElementById('app'));