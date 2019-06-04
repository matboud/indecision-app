"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BuildIt = function (_React$Component) {
    _inherits(BuildIt, _React$Component);

    function BuildIt(props) {
        _classCallCheck(this, BuildIt);

        var _this = _possibleConstructorReturn(this, (BuildIt.__proto__ || Object.getPrototypeOf(BuildIt)).call(this, props));

        _this.visibility = _this.visibility.bind(_this);
        _this.state = {
            isVisible: false
        };
        return _this;
    }

    _createClass(BuildIt, [{
        key: "visibility",
        value: function visibility() {
            this.setState({
                isVisible: !this.state.isVisible
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibility Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.visibility },
                    !this.state.isVisible ? "show details" : "hide details"
                ),
                React.createElement(
                    "h2",
                    null,
                    this.state.isVisible ? "the details are showing up" : ""
                )
            );
        }
    }]);

    return BuildIt;
}(React.Component);

ReactDOM.render(React.createElement(BuildIt, null), document.getElementById('app'));

// const app = {
//     show : false,
// }

// const visibility = () => {
//     app.show = !app.show;
//     console.log(app.show);
//     rerender();
// }

// const rerender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={visibility}>{!app.show ? 'show details' : 'hide details'}</button>
//             <h2>{app.show ? 'the details are showing up' : ''}</h2>
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// rerender();
