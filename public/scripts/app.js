'use strict';

console.log("hello");

var app = {
    title: 'title',
    subtitle: 'subtitle'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item'
        ),
        React.createElement(
            'li',
            null,
            'item'
        ),
        React.createElement(
            'li',
            null,
            'item'
        )
    )
);

var name = 'amine';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        name
    ),
    React.createElement(
        'p',
        null,
        'Age: 24'
    ),
    React.createElement(
        'p',
        null,
        'Location: kenitra'
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
