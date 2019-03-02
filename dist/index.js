'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StencilComponent = function StencilComponent() {
    return _react2.default.createElement(
        'h1',
        null,
        'This is the stencil of a component.'
    );
};

exports.default = StencilComponent;