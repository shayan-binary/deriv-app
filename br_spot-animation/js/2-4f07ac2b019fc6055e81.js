(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/javascript/app/Assets/Common/icon-arrow.jsx":
/*!*********************************************************!*\
  !*** ./src/javascript/app/Assets/Common/icon-arrow.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconArrow = function IconArrow(_ref) {
    var className = _ref.className,
        classNamePath = _ref.classNamePath;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16' },
        _react2.default.createElement('path', {
            className: (0, _classnames2.default)(classNamePath, 'color1-fill'),
            fill: 'rgba(0, 0, 0, 0.8)',
            fillRule: 'nonzero',
            d: 'M13.164 5.13a.5.5 0 1 1 .672.74l-5.5 5a.5.5 0 0 1-.672 0l-5.5-5a.5.5 0 0 1 .672-.74L8 9.824l5.164-4.694z'
        })
    );
};

IconArrow.propTypes = {
    className: _propTypes2.default.string,
    classNamePath: _propTypes2.default.string
};

exports.default = IconArrow;

/***/ })

}]);