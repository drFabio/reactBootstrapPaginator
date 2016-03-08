(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactPaginator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paginator = _react2.default.createClass({
    displayName: 'Paginator',
    getDefaultProps: function getDefaultProps() {
        return {
            max: 10,
            current: 1
        };
    },
    render: function render() {
        var _this = this;

        var current = this.props.current;
        var total = this.props.total;
        var max = this.props.max;

        var start = Math.max(current - Math.round(max / 2), 1);

        var end = Math.min(start + max, total);
        if (end - start < max) {
            start = Math.max(1, end - max);
        }
        var hasLess = null;
        var previous = null;
        if (start != 1) {
            hasLess = _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    null,
                    '...'
                )
            );
            previous = _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left', onClick: function onClick(e) {
                            return _this.props.onPage(current - 1);
                        } })
                )
            );
        }
        var hasMore = null;
        var next = null;
        if (end < total) {
            hasMore = _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    null,
                    '...'
                )
            );
            next = _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right', onClick: function onClick(e) {
                            return _this.props.onPage(current + 1);
                        } })
                )
            );
        }
        var getLinks = function getLinks(start, end) {
            var links = [];

            var _loop = function _loop(i) {
                var className = i == current ? 'active' : '';
                links.push(_react2.default.createElement(
                    'li',
                    { key: i, className: className },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0)', onClick: function onClick(e) {
                                return _this.props.onPage(i);
                            } },
                        i
                    )
                ));
            };

            for (var i = start; i <= end; i++) {
                _loop(i);
            }
            return links;
        };
        return _react2.default.createElement(
            'div',
            { className: 'text-center' },
            _react2.default.createElement(
                'ul',
                { className: 'pagination' },
                previous,
                hasLess,
                getLinks(start, end),
                hasMore,
                next
            )
        );
    }
});
require('./paginator.css');
exports.default = Paginator;
module.exports = exports['default'];

},{"./paginator.css":2}],2:[function(require,module,exports){
var css = ".pagination li a .glyphicon{line-height:inherit}"; (require("browserify-css").createStyle(css, { "href": "lib/paginator.css"})); module.exports = css;
},{"browserify-css":3}],3:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }
        
        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            head.appendChild(style);
        } else if (style.styleSheet) { // for IE8 and below
            head.appendChild(style);
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            head.appendChild(style);
        }
    }
};

},{}]},{},[1])(1)
});