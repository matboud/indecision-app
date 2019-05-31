'use strict';

console.log('hello');

var template = React.createElement(
  'p',
  null,
  'hello react'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
