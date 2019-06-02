'use strict';

var app = {
    show: false
};

var visibility = function visibility() {
    app.show = !app.show;
    console.log(app.show);
    rerender();
};

var rerender = function rerender() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: visibility },
            !app.show ? 'show details' : 'hide details'
        ),
        React.createElement(
            'h2',
            null,
            app.show ? 'the details are showing up' : ''
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
rerender();
